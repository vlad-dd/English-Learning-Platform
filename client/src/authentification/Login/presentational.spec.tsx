import { render, screen, fireEvent } from '@testing-library/react'
import Login from './presentational';
import * as ReactRedux from 'react-redux';
import { withReduxProvider, withRouterProvider } from '../../test-utils/hocs';

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

const formFields = ['Email', 'Password', 'Submit', 'Reset'];

const LoginWithProvider = withRouterProvider(withReduxProvider(Login));

describe('Login Form', () => {
    const selectorSpyOn = jest.spyOn(ReactRedux, 'useSelector');
    beforeEach(() => {
        selectorSpyOn.mockClear();
        selectorSpyOn.mockReturnValue({ user: [{ id: 1 }] });
        render(<LoginWithProvider />)
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