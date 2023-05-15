//@ts-nocheck
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { noop } from 'lodash';
import ErrorBoundary from '../../ErrorBoundary';
import store from '../../store';
import { ThemeContext } from '../../Contexts';
import HeaderRightSide from '.';

const ApplicationProviders = ({ children }: { children: JSX.Element }) => {
    return (
      <ErrorBoundary>
        <BrowserRouter>
          <Provider store={store}>
            <ThemeContext>{children}</ThemeContext>
          </Provider>
        </BrowserRouter>
      </ErrorBoundary>
    );
};

describe('HeaderLeftSide', () => {

    describe('When user exists', () => {
        const handleSignOut = jest.fn();
        beforeEach(() => {
            render(<ApplicationProviders><HeaderRightSide enteredUser={{email: 'test@gmail.com'}} handleSignOut={handleSignOut} /></ApplicationProviders>)
        })
    
        it('should render HeaderLeftSide', () => {
            expect(screen.getByText('test@gmail.com')).toBeInTheDocument();
            expect(screen.getByRole('img')).toBeInTheDocument();
        })

        it('should render header dropdown menu', () => {
            const menuItems = ['Profile', 'Sign out'];
            fireEvent.click(screen.getByText('test@gmail.com'))
            expect(screen.getByTestId("header-dropdown-menu")).toBeInTheDocument();
            menuItems.forEach((menuItem) => expect(screen.getByText(menuItem)).toBeInTheDocument())
        })

        it('should call handleSignOut method if clicked', () => {
            fireEvent.click(screen.getByText('test@gmail.com'))
            fireEvent.click(screen.getByText('Sign out'))
            expect(handleSignOut).toHaveBeenCalled();
        })

    })

    describe('When user does not exist', () => {
        beforeEach(() => {
            render(<ApplicationProviders><HeaderRightSide enteredUser={null} handleSignOut={noop}/></ApplicationProviders>)
        })
    
        it('should render HeaderLeftSide', () => {
            expect(screen.getByText('Guest')).toBeInTheDocument();
            expect(screen.getByRole('img')).toBeInTheDocument();
        })
    })

})