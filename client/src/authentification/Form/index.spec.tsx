import { fireEvent, render, screen } from '@testing-library/react';
import { withReduxProvider, withRouterProvider } from '../../test-utils/hocs';
import AntForm from '.';
import {
  ACTION_NAVIGATE_PATH,
  FORM_ACTIONS,
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

jest.mock('./use-form-configuration', () => ({
  useFormConfigurationWidget: () => mockConfig,
}))

const formFields = ['Email', 'Password', 'Submit', 'Reset'];

const AntFormWithProvider = withRouterProvider(withReduxProvider(AntForm));

describe('Ant Form', () => {

  beforeEach(() => {
    render(<AntFormWithProvider action={FORM_ACTIONS.REGISTRATION} navigatePath={ACTION_NAVIGATE_PATH.LOGIN} />);
  });

  it('should render form', () => {
    expect(screen.getByTestId(INPUT_FORM_DATA_TEST_ID)).toBeInTheDocument();
    formFields.forEach((field) => expect(screen.getByText(field)).toBeInTheDocument());
  });

  it('should call onFormSubmit after pressing Submit button', () => {
    fireEvent.click(screen.getByTestId(FORM_SUBMIT_BUTTON_DATA_TEST_ID));
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
    const input = screen.getByTestId(FORM_PASSWORD_INPUT_DATA_TEST_ID);
    const mockedPassword = 'mockedPassword';
    fireEvent.change(input, { target: { value: mockedPassword } });
    expect(mockConfig.handlePassword).toHaveBeenCalledWith(mockedPassword);
    expect(input.getAttribute('value')).toBe(mockedPassword)
    expect(mockConfig.handlePassword).toHaveBeenCalledTimes(1);
  });
});
