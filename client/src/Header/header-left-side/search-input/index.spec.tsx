import { render, screen } from "@testing-library/react";
import { withReduxProvider, withRouterProvider } from "../../../test-utils/hocs";
import { HEADER_AUTOCOMPLETE_DATA_TEST_ID } from "../../constants";
import SearchInput from ".";

const SearchInputWithProvider = withRouterProvider(withReduxProvider(SearchInput));

describe('Search Input', () => {
    it('should render Autocomplete', () => {
        render(<SearchInputWithProvider />);
        const input = screen.getByTestId(HEADER_AUTOCOMPLETE_DATA_TEST_ID);
        expect(input).toBeInTheDocument();
    });
});