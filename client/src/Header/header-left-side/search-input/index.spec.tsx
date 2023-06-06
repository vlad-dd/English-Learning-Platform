import { render, screen } from "@testing-library/react";
import SearchInput from ".";
import { withReduxProvider, withRouterProvider } from "../../../test-utils/hocs";

const SearchInputWithProvider = withRouterProvider(withReduxProvider(SearchInput));

describe('Search Input', () => {
    it('should render Autocomplete', () => {
        render(<SearchInputWithProvider />);
        const input = screen.getByTestId('header-autocomplete');
        expect(input).toBeInTheDocument();
        expect(input.getAttribute("style")).toBe("width: 35vw;");
    });
});