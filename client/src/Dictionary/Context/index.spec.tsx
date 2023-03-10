/* eslint-disable react/jsx-key */
import React, { useContext } from "react";
import { render, screen } from "@testing-library/react";
import { get } from "lodash";
import DictionaryContext, { DictionaryConfigurationContext } from ".";


const dictionaryMock = [{
    meanings: [{
        partOfSpeech: 'Mocked Part Of Speech'
    }]
}];

jest.mock('../Hooks/use-dictionary', () => ({
    useDictionary: () => ({
        data: {
            dictionary: dictionaryMock
        },
        isLoading: false,
        searchWordInDictionary: jest.fn()
    })
}))


const MockComponent = () => {
    const { data } = useContext(DictionaryConfigurationContext);
    const { meanings } = get(data, 'dictionary[0]');
    return (
        <div data-testid="mocked-context-child">
            {meanings.map(({partOfSpeech }: { partOfSpeech: string }) => <p>{partOfSpeech}</p>)}
        </div>
    )
}

describe('Dictionary Context', () => {

    it("should provide context to child component", () => {
      render(
        <DictionaryContext>
          <MockComponent />
        </DictionaryContext>
      );
      expect(screen.getByTestId("mocked-context-child")).toBeInTheDocument();
      expect(screen.getByText("Mocked Part Of Speech")).toBeInTheDocument();
    });
});