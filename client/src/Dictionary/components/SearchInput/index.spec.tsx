import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchInput from ".";
import { DictionaryConfigurationContext } from "../../Context";

describe("SearchInput", () => {

  const contextConfiguration = {
    data: {},
    isLoading: false,
    searchWordInDictionary: jest.fn(),
    error: undefined 
  };

  beforeEach(() => {
    render(
      <DictionaryConfigurationContext.Provider value={contextConfiguration}>
        <SearchInput />
      </DictionaryConfigurationContext.Provider>
    );
  });

  it("should render SearchInput", () => {
    expect(screen.getByTestId("dictionary-search-input")).toBeInTheDocument();
    expect(screen.getByTestId("dictionary-search-button")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  it("should fill the input value and call searchWordInDictionary if button was pressed", () => {
    const input = screen.getByTestId("dictionary-search-input");
    fireEvent.change(input, { target: { value: 'toSearch' } });
    fireEvent.click(screen.getByTestId("dictionary-search-button"));
    expect(contextConfiguration.searchWordInDictionary).toHaveBeenCalledWith({ variables: { word: "toSearch" } });
    expect(contextConfiguration.searchWordInDictionary).toHaveBeenCalledTimes(1);
  });

  it("should fill the input value and call searchWordInDictionary if enter was pressed ", () => {
    const input = screen.getByTestId("dictionary-search-input");
    fireEvent.change(input, { target: { value: 'search-value' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(contextConfiguration.searchWordInDictionary).toHaveBeenCalledWith({ variables: { word: "search-value" } });
    expect(contextConfiguration.searchWordInDictionary).toHaveBeenCalledTimes(1);
  });
});
