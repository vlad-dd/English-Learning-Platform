import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react' 
import Registration from './presentational';
import ErrorBoundary from '../../ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';
import { Provider } from 'react-redux';
import { ThemeContext } from '../../Contexts';

const mockConfig = {
    email: '',
    password: '',
    handleEmail: jest.fn(),
    handlePassword: jest.fn(),
    onFormSubmit: jest.fn(),
    onReset: jest.fn(),
}

jest.mock('../Form/use-form-configuration', () => ({
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

describe('Registration Form', () => {
    
    beforeEach(() => {
        render(<ApplicationProviders><Registration /></ApplicationProviders>)
    })

    it('should render Registration form', () => {
        expect(screen.getByTestId('input-form')).toBeInTheDocument();
        formFields.forEach((field) => expect(screen.getByText(field)).toBeInTheDocument());
    })

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
})