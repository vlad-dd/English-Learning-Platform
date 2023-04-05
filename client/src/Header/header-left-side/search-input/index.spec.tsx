import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import SearchInput from ".";
import { ThemeContext } from "../../../Contexts";
import ErrorBoundary from "../../../ErrorBoundary";
import store from "../../../store";

const HeaderProviders = ({ children }: { children: JSX.Element }) => {
    return (
        <BrowserRouter>
            <ErrorBoundary>
                <Provider store={store}>
                    <ThemeContext>
                        {children}
                    </ThemeContext>
                </Provider>
            </ErrorBoundary>
        </BrowserRouter>
    );
};

describe('Search Input', () => {
    it('should render Autocomplete', () => {
        render(<HeaderProviders><SearchInput /></HeaderProviders>)
        const input = screen.getByTestId('header-autocomplete');
        expect(input).toBeInTheDocument();
        expect(input.getAttribute("style")).toBe("width: 35vw;");
    });
})