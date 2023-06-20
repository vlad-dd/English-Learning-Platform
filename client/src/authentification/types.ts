
export interface IFormProps {
    action: "login" | "registration";
    navigatePath: "/" | "/login";
};

export interface IActionNavigatePath { 
    HOME: "/",
    LOGIN: "/login",
    REGISTRATION: "/registration"
};

export interface IFormActions {
    LOGIN: 'login',
    REGISTRATION: 'registration'
};

export type UserAction =  "login" | "registration";
export type NavigatePath = "/" | "/login";