import { renderHook, screen , waitFor } from "@testing-library/react";
import DictionaryContext from "../../Context";
import { renderAudioPlayer, useAudioPlayerWidget } from ".";
import { COUNTRIES_FLAGS } from "../../constants";

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
                    audio: "pathToAudio-us.mp3",
                    license: {
                        __typename: "license",
                        name: "license name",
                        url: "licenseMock.com",
                    },
                    sourceUrl: "mocked sourceUrl",
                    text: "mocked text",
                },
                {
                    __typename: "Phonetics",
                    audio: "",
                    license: {
                        __typename: "license",
                        name: "license name",
                        url: "licenseMock.com",
                    },
                    sourceUrl: "mocked sourceUrl",
                    text: "text without audio",
                }
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

jest.mock('../use-dictionary', () => ({
    useDictionaryWidget: () => ({
        data: {
            dictionary: responseMock.dictionary
        },
        isLoading: false,
        searchWordInDictionary: jest.fn()
    })
}))

const ApplicationProviders = ({ children }: { children: JSX.Element }) => {
    return (
        <DictionaryContext>
         {children}
        </DictionaryContext>
    )
}

describe('useAudioPlayerWidget', () => {

    it('should render audio card', () => {
        const { result } = renderHook(() => useAudioPlayerWidget(), { wrapper: ApplicationProviders });
        const audioCard = renderAudioPlayer('pathToAudio-us.mp3', 'mocked text', COUNTRIES_FLAGS.US)
        expect(result.current.audioPlayers[0].type).toEqual(audioCard.type);
        expect(result.current.audioPlayers[0].key).toEqual(audioCard.key);
    });

})