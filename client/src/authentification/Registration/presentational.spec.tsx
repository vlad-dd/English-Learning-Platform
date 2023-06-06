import { render, screen, fireEvent } from '@testing-library/react' 
import Registration from './presentational';
import { withReduxProvider, withRouterProvider } from '../../test-utils/hocs';

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