import React from "react";
import { render, screen } from "@testing-library/react";
import Dictionary from "./presentational";
import { DictionaryConfigurationContext } from "./Context";

const responseMock = {
    dictionary: [
        {
            __typename: "Mocked Typename",
            word: "Mocked Word",
            phonetic: "Mocked Phonetic",
            sourceUrls: ["Mocked Source Url"],
            license: {
                __typename: "license",
                name: "license name",
                url: "licenseMock.com",
            },
            phonetics: [
                {
                    __typename: "Phonetics",
                    audio: "pathToAudio.mp4",
                    license: {
                        __typename: "license",
                        name: "license name",
                        url: "licenseMock.com",
                    },
                    sourceUrl: "mocked sourceUrl",
                    text: "mocked text",
                },
            ],
            meanings: [
                {
                    __typename: "Mocked Dictionary",
                    antonyms: ["antonym"],
                    synonyms: ["synonym"],
                    definitions: [
                        {
                            __typename: "Mocked Definition Typename",
                            definition: "Mocked Definition",
                            antonyms: ["antonym"],
                            synonyms: ["synonym"],
                            example: "Mocked Example",
                        },
                    ],
                    partOfSpeech: "Mocked Part Of Speech",
                },
            ],
        },
    ],
};

describe('Dictionary', () => {
    describe('while isLoading false', () => {
        beforeEach(() => {
            render(
                <DictionaryConfigurationContext.Provider value={{ data: responseMock, isLoading: false, searchWordInDictionary: jest.fn() }}>
                    <Dictionary />
                </DictionaryConfigurationContext.Provider>
            )
        })
        it('should render Dictionary root', () => {
            expect(screen.getByTestId('dictionary-wrapper')).toBeInTheDocument();
        });
    
        it('should render tip alert', () => {
            const alertText = 'Tip: You can`t search phrases here, only single words.';
            expect(screen.getByText(alertText)).toBeInTheDocument();
            expect(screen.getByText(alertText).getAttribute('class')).toBe('ant-alert-message');
        });
    
        it('should render search input', () => {
            const searchInputId = 'dictionary-search-input';
            expect(screen.getByTestId(searchInputId)).toBeInTheDocument();
            expect(screen.getByText('Search')).toBeInTheDocument();
            expect(screen.getByTestId(searchInputId).getAttribute("placeholder")).toBe('Search word...');
        });
    
        it('should render word definitions table', () => {
            const defitionsTableId = 'definitions-table';
            const expectedValues = ['Part Of Speech', 'Definitions', 'Mocked Part Of Speech', 'Mocked Definition'];
            expect(screen.getByTestId(defitionsTableId)).toBeInTheDocument();
            expect(screen.getByTestId(defitionsTableId).getAttribute('class')).toBe('ant-table');
            expectedValues.forEach((value: string) => expect(screen.getByText(value)).toBeInTheDocument());
        });
    })

    describe('while isLoading true', () => {
        it('should render Dictionary root', () => {
            render(
                <DictionaryConfigurationContext.Provider value={{ data: responseMock, isLoading: true, searchWordInDictionary: jest.fn() }}>
                    <Dictionary />
                </DictionaryConfigurationContext.Provider>
            )
            expect(screen.getByTestId('dictionary-wrapper')).toBeInTheDocument();
            expect(screen.getByText('Loading...')).toBeInTheDocument();
        });
    });
})