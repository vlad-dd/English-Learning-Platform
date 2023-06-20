import { IActionNavigatePath, IFormActions } from "./types";

export const INPUT_FORM_DATA_TEST_ID = "input-form";
export const FORM_EMAIL_INPUT_DATA_TEST_ID = "email-input";
export const FORM_PASSWORD_INPUT_DATA_TEST_ID = "password-input";
export const FORM_SUBMIT_BUTTON_DATA_TEST_ID = "submit-button";

export const ACTION_NAVIGATE_PATH: IActionNavigatePath = {
    HOME: "/",
    LOGIN: "/login",
    REGISTRATION: "/registration"
};

export const FORM_LABELS = {
    EMAIL: "Email",
    PASSWORD: "Password"
};

export const FORM_NAMES = {
    BASIC: "basic",
    EMAIL: "Email",
    PASSWORD: "Password"
};

export const FORM_ACTIONS: IFormActions = {
    LOGIN: 'login',
    REGISTRATION: 'registration'
};

export const FORM_MESSAGES = {
    EMAIL: 'Please input your email!',
    PASSWORD: 'Please input your password!'
};

export const FORM_ERRORS = {
    EMPTY_FIELDS: 'Fields shoud not be empty!',
    UNEXISTED_USER: 'User does not exist!',
    HALF_EMPTY_FIELDS: 'Make sure that you filed all fields!',
    NOT_ACCEPTABLE_FORMAT: 'Not acceptable format!'
};

export const FORM_BUTTONS = {
    SUBMIT: 'Submit',
    RESET: 'Reset'
};

export const FORM_ACTION_MESSAGES = {
    SUCCESSFULLY_REGISTERED: "Successfully registered!"
}