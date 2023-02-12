/* eslint-disable react/jsx-key */
import React, { useContext } from "react";
import { render, screen } from "@testing-library/react";
import { get } from "lodash";
import { DictionaryConfigurationContext } from ".";

const dictionaryMock = [{
    meanings: [{
        partOfSpeech: 'Mocked Part Of Speech'
    }]
}];

const contextConfiguration = {
    data: {
        dictionary: dictionaryMock
    },
};

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
        //@ts-ignore
        <DictionaryConfigurationContext.Provider value={contextConfiguration}>
          <MockComponent />
        </DictionaryConfigurationContext.Provider>
      );
      expect(screen.getByTestId("mocked-context-child")).toBeInTheDocument();
      expect(screen.getByText("Mocked Part Of Speech")).toBeInTheDocument();
    });
});