import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AntForm from '.';
import { ThemeContext } from '../../Contexts';
import ErrorBoundary from '../../ErrorBoundary';
import store from '../../store';

const mockConfig = {
    email: '',
    password: '',
    handleEmail: jest.fn(),
    handlePassword: jest.fn(),
    onFormSubmit: jest.fn(),
    onReset: jest.fn(),
}

jest.mock('./use-form-configuration', () => ({
    useFormConfiguration: () => mockConfig,
}))

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
const formFields = ['Email', 'Password', 'Submit', 'Reset'];

describe('Ant Form', () => {

    beforeEach(() => {
        render(<ApplicationProviders><AntForm action='registration' navigatePath='/login' /></ApplicationProviders>)
    });

    it('should render form', () => {
        expect(screen.getByTestId('input-form')).toBeInTheDocument();
        formFields.forEach((field) => expect(screen.getByText(field)).toBeInTheDocument());
    });

    it('should call onFormSubmit after pressing Submit button', () => {
        fireEvent.click(screen.getByTestId('submit-button'));
        expect(mockConfig.onFormSubmit).toHaveBeenCalled(); 
    });

    it('should call handleEmail with correct value', () => {
        const input = screen.getByTestId('email-input');
        const mockedEmail = 'mockEmail@gmail.com';
        fireEvent.change(input, { target: { value: mockedEmail } });
        expect(mockConfig.handleEmail).toHaveBeenCalledWith(mockedEmail);
        expect(input.getAttribute('value')).toBe(mockedEmail)
        expect(mockConfig.handleEmail).toHaveBeenCalledTimes(1);
    });

    it('should call handlePassword with correct value', () => {
        const input = screen.getByTestId('password-input');
        const mockedPassword = 'mockedPassword';
        fireEvent.change(input, { target: { value: mockedPassword } });
        expect(mockConfig.handlePassword).toHaveBeenCalledWith(mockedPassword);
        expect(input.getAttribute('value')).toBe(mockedPassword)
        expect(mockConfig.handlePassword).toHaveBeenCalledTimes(1);
    });
});
