import { render, screen } from "@testing-library/react";
import Dictionary from "./presentational";
import { DictionaryConfigurationContext } from "./Context";
import { DICTIONARY_TIP, UNEXISTED_WORD_DESCRIPTION } from "./constants";
import { BrowserRouter } from "react-router-dom";
import { APOLLO_GRAPHQL_ERRORS, ELP_USER_EXPERIENCE_ERRORS } from "../Сommon/error-handler-page/constants";
import { buildApolloError } from "../test-utils";

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
                <DictionaryConfigurationContext.Provider value={{ data: responseMock, isLoading: false, searchWordInDictionary: jest.fn(), error: undefined  }}>
                    <Dictionary />
                </DictionaryConfigurationContext.Provider>
            )
        })
        it('should render Dictionary root', () => {
            expect(screen.getByTestId('content-section-wrapper')).toBeInTheDocument();
            expect(screen.getByTestId('dictionary-wrapper')).toBeInTheDocument();
        });

        it('should render tip alert', () => {
            expect(screen.getByText(DICTIONARY_TIP)).toBeInTheDocument();
            expect(screen.getByText(DICTIONARY_TIP).getAttribute('class')).toBe('ant-alert-message');
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
    });

    describe('while isLoading true', () => {
        it('should render Dictionary root', () => {
            render(
                <DictionaryConfigurationContext.Provider value={{ data: responseMock, isLoading: true, searchWordInDictionary: jest.fn(), error: undefined }}>
                    <Dictionary />
                </DictionaryConfigurationContext.Provider>
            );
            expect(screen.getByTestId('loading-progress')).toBeInTheDocument();
        });
    });

    describe('when user entered unexisted word', () => {
        it('should render Dictionary root', () => {
            render(
                <DictionaryConfigurationContext.Provider value={{ data: responseMock, isLoading: true, searchWordInDictionary: jest.fn(), error: buildApolloError(APOLLO_GRAPHQL_ERRORS.REQUEST_FAILED_404) }}>
                    <Dictionary />
                </DictionaryConfigurationContext.Provider>
            );
            screen.debug();
            expect(screen.getByTestId("error-empty-space")).toBeInTheDocument();
            expect(screen.getByText(UNEXISTED_WORD_DESCRIPTION)).toBeInTheDocument();
        });
    });

    describe('when user has a bad connection', () => {
        it('should show that connection is bad', () => {
            const windowNavigatorSpy = jest.spyOn(window.navigator, 'onLine', 'get');
            windowNavigatorSpy.mockReturnValue(false);
            render(
                <BrowserRouter>
                    <DictionaryConfigurationContext.Provider value={{ data: responseMock, isLoading: false, searchWordInDictionary: jest.fn(), error: undefined }}>
                        <Dictionary />
                    </DictionaryConfigurationContext.Provider>
                </BrowserRouter>
            );
            expect(screen.getByTestId("error-page")).toBeInTheDocument();
            expect(screen.getByText(ELP_USER_EXPERIENCE_ERRORS.BAD_CONNECTION)).toBeInTheDocument(); 
        });
    });
});