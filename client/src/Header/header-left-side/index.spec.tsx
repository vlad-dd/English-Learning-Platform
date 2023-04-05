import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from '../../ErrorBoundary';
import { Provider } from 'react-redux';
import store from '../../store';
import { ThemeContext } from '../../Contexts';
import HeaderLeftSide from '.';

export const HeaderProviders = ({ children }: { children: JSX.Element }) => {
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

describe('HeaderLeftSide', () => {
    it('should render Autocomplete', () => {
        render(<HeaderProviders><HeaderLeftSide /></HeaderProviders>)
        expect(screen.getByTestId('header-autocomplete')).toBeInTheDocument();
        expect(screen.getByTestId('header-autocomplete').getAttribute("style")).toBe("width: 35vw;");
    });

    it('should render mobile menu', () => {
        render(<HeaderProviders><HeaderLeftSide /></HeaderProviders>)
        expect(screen.getByTestId('mobile-menu-icon')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('mobile-menu-icon'));
        expect(screen.getByTestId('burger-menu')).toBeInTheDocument();
    });
})