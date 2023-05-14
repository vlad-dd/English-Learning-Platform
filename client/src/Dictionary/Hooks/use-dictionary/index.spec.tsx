import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useDictionaryWidget } from ".";
import { GET_WORD_FROM_DICTIONARY } from "../../graphql";
import { extractByPath } from "../../../utils/utils";

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

const mocks = [
  {
    request: {
      query: GET_WORD_FROM_DICTIONARY,
      variables: {
        word: "word",
      },
    },
    result: {
      data: responseMock,
    },
  },
];

const MockWrapper = ({ children }: { children: JSX.Element }) => {
  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      {children}
    </MockedProvider>
  );
};

describe("Use Dictionary", () => {
  it("should return response after callind lazy query", async () => {

    const { result } = renderHook(() => useDictionaryWidget(), {
      wrapper: MockWrapper,
    });

    // call the lazy function
    act(() => {
      result.current.searchWordInDictionary({ variables: { word: "word" } });
    });

    await waitFor(() => {
      const response = extractByPath(result, "current.data.dictionary[0]");
      const mock = extractByPath(responseMock, "dictionary[0]");
      expect(response.word).toBe(mock.word);
      expect(response.phonetic).toBe(mock.phonetic);
      expect(response.phonetics[0].audio).toBe(mock.phonetics[0].audio);
      expect(response.phonetics[0].text).toBe(mock.phonetics[0].text);
      expect(response.meanings[0].partOfSpeech).toBe(
        mock.meanings[0].partOfSpeech
      );
      expect(response.phonetics[0].sourceUrl).toBe(mock.phonetics[0].sourceUrl);
      expect(response.license.name).toBe(mock.license.name);
      expect(response.license.url).toBe(mock.license.url);
      expect(response.sourceUrls).toStrictEqual(mock.sourceUrls);
    });
  });
});
