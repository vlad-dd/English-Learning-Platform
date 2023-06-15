import { fireEvent, render, screen } from "@testing-library/react";
import { withIntlProvider } from "../../../test-utils/hocs";
import { DictionaryConfigurationContext } from "../../Context";
import { DICTIONARY_SEARCH_BUTTON_DATA_TEST_ID, DICTIONARY_SEARCH_INPUT_DATA_TEST_ID } from "../../constants";
import SearchInput from ".";

const SearchInputWithProvider = withIntlProvider(SearchInput);

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
        <SearchInputWithProvider />
      </DictionaryConfigurationContext.Provider>
    );
  });

  it("should render SearchInput", () => {
    expect(screen.getByTestId(DICTIONARY_SEARCH_INPUT_DATA_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(DICTIONARY_SEARCH_BUTTON_DATA_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  it("should fill the input value and call searchWordInDictionary if button was pressed", () => {
    const input = screen.getByTestId(DICTIONARY_SEARCH_INPUT_DATA_TEST_ID);
    fireEvent.change(input, { target: { value: 'toSearch' } });
    fireEvent.click(screen.getByTestId(DICTIONARY_SEARCH_BUTTON_DATA_TEST_ID));
    expect(contextConfiguration.searchWordInDictionary).toHaveBeenCalledWith({ variables: { word: "toSearch" } });
    expect(contextConfiguration.searchWordInDictionary).toHaveBeenCalledTimes(1);
  });

  it("should fill the input value and call searchWordInDictionary if enter was pressed ", () => {
    const input = screen.getByTestId(DICTIONARY_SEARCH_INPUT_DATA_TEST_ID);
    fireEvent.change(input, { target: { value: 'search-value' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(contextConfiguration.searchWordInDictionary).toHaveBeenCalledWith({ variables: { word: "search-value" } });
    expect(contextConfiguration.searchWordInDictionary).toHaveBeenCalledTimes(1);
  });
});
