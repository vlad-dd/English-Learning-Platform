import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react' 
import Login from './presentational';
import ErrorBoundary from '../../ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';
import * as ReactRedux from 'react-redux';
import { ThemeContext } from '../../Contexts';

const mockConfig = {
    email: '',
    password: '',
    handleEmail: jest.fn(),
    handlePassword: jest.fn(),
    onFormSubmit: jest.fn(),
    onReset: jest.fn(),
}

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn()
}))

jest.mock('../Form/use-form-configuration', () => ({
    useFormConfigurationWidget: () => mockConfig,
}))

const ApplicationProviders = ({ children }: { children: JSX.Element }) => {
    return (
      <ErrorBoundary>
        <BrowserRouter>
          <ReactRedux.Provider store={store}>
            <ThemeContext>{children}</ThemeContext>
          </ReactRedux.Provider>
        </BrowserRouter>
      </ErrorBoundary>
    );
  };
const formFields = ['Email', 'Password', 'Submit', 'Reset'];

describe('Login Form', () => {
    const selectorSpyOn = jest.spyOn(ReactRedux, 'useSelector');
    beforeEach(() => {
        selectorSpyOn.mockClear();
        selectorSpyOn.mockReturnValue({user: [{id: 1}]});
        render(<ApplicationProviders><Login /></ApplicationProviders>)
    })
    it('should render Login form', () => {
        expect(screen.getByTestId('input-form')).toBeInTheDocument();
        formFields.forEach((field) => expect(screen.getByText(field)).toBeInTheDocument());
    })

    it('should announce that user is registered if exists', () => {
        expect(screen.queryAllByText('Successfully registered!')[0]).toBeInTheDocument();
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
})