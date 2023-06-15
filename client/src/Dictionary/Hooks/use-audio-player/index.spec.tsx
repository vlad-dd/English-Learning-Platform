import { RenderHookResult, renderHook } from "@testing-library/react";
import DictionaryContext from "../../Context";
import * as Hook from "./use-render-audio-player";
import { IAudioPlayerWidgetMock } from "../../types";
import { useAudioPlayerWidget } from ".";

jest.mock("./use-render-audio-player");

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
};

describe('useAudioPlayerWidget', () => {
    const renderAudioPlayerSpy: jest.SpyInstance = jest.spyOn(Hook, "useRenderAudioPlayer");
    it('should render audio card', () => {
        renderAudioPlayerSpy.mockReturnValue({ audioPlayerFactory: jest.fn((params) => params) });
        const { result }: RenderHookResult<any, IAudioPlayerWidgetMock> = renderHook(() => useAudioPlayerWidget(), { wrapper: ApplicationProviders });
        const { audio, text } = result.current.audioPlayers[0];
        const response = responseMock.dictionary[0].phonetics[0];
        expect(audio).toBe(response.audio);
        expect(text).toBe(response.text);
    });
});
