import { render, screen, fireEvent } from '@testing-library/react'
import { withReduxProvider, withRouterProvider } from '../../test-utils/hocs';
import Registration from './presentational';
import {
    FORM_EMAIL_INPUT_DATA_TEST_ID,
    FORM_PASSWORD_INPUT_DATA_TEST_ID,
    FORM_SUBMIT_BUTTON_DATA_TEST_ID,
    INPUT_FORM_DATA_TEST_ID
} from '../constants';

const mockConfig = {
    email: '',
    password: '',
    handleEmail: jest.fn(),
    handlePassword: jest.fn(),
    onFormSubmit: jest.fn(),
    onReset: jest.fn(),
}

jest.mock('../Form/use-form-configuration', () => ({
    useFormConfigurationWidget: () => mockConfig,
}));

const formFields = ['Email', 'Password', 'Submit', 'Reset'];

const RegistrationWithProvider = withRouterProvider(withReduxProvider(Registration));

describe('Registration Form', () => {
    beforeEach(() => {
        render(<RegistrationWithProvider />);
    });

    it('should render Registration form', () => {
        expect(screen.getByTestId(INPUT_FORM_DATA_TEST_ID)).toBeInTheDocument();
        formFields.forEach((field) => expect(screen.getByText(field)).toBeInTheDocument());
    })

    it('should call onFormSubmit after pressing Submit button', () => {
        fireEvent.click(screen.getByTestId(FORM_SUBMIT_BUTTON_DATA_TEST_ID));
        expect(mockConfig.onFormSubmit).toHaveBeenCalled();
    });

    it('should call handleEmail with correct value', () => {
        const input = screen.getByTestId(FORM_EMAIL_INPUT_DATA_TEST_ID);
        const mockedEmail = 'mockEmail@gmail.com';
        fireEvent.change(input, { target: { value: mockedEmail } });
        expect(mockConfig.handleEmail).toHaveBeenCalledWith(mockedEmail);
        expect(input.getAttribute('value')).toBe(mockedEmail)
        expect(mockConfig.handleEmail).toHaveBeenCalledTimes(1);
    });

    it('should call handlePassword with correct value', () => {
        const input = screen.getByTestId(FORM_PASSWORD_INPUT_DATA_TEST_ID);
        const mockedPassword = 'mockedPassword';
        fireEvent.change(input, { target: { value: mockedPassword } });
        expect(mockConfig.handlePassword).toHaveBeenCalledWith(mockedPassword);
        expect(input.getAttribute('value')).toBe(mockedPassword)
        expect(mockConfig.handlePassword).toHaveBeenCalledTimes(1);
    });
})