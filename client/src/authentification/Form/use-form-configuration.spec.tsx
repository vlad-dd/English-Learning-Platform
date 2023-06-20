import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { noop } from "lodash";
import ErrorBoundary from "../../ErrorBoundary";
import store from "../../store";
import FireBaseAPI from "../firebase-api";
import { useFormConfigurationWidget } from "./use-form-configuration";
import { ACTION_NAVIGATE_PATH, FORM_ACTIONS } from "../constants";

const ApplicationProviders = ({ children }: { children: JSX.Element }) => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          {children}
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

describe("Use Form Configuration", () => {
  let config: any;

  describe("Login", () => {
    beforeEach(() => {
      config = renderHook(() => useFormConfigurationWidget(FORM_ACTIONS.LOGIN, ACTION_NAVIGATE_PATH.HOME), {
        wrapper: ApplicationProviders,
      });
    });

    it("should return form configuration", () => {
      const { result } = config;
      expect(result.current.email).toBe("");
      expect(result.current.password).toBe("");
      expect(result.current.handleEmail).toEqual(expect.any(Function));
      expect(result.current.handlePassword).toEqual(expect.any(Function));
      expect(result.current.onFormSubmit).toEqual(expect.any(Function));
    });

    it("should change email value", () => {
      const { result } = config;
      const emailMock = "emailMock@gmail.com";
      act(() => {
        result.current.handleEmail({ target: { value: emailMock } });
      });
      expect(result.current.email.target.value).toBe(emailMock);
    });

    it("should change email value", () => {
      const { result } = config;
      const passwordMock = "mockPassword";
      act(() => {
        result.current.handlePassword({ target: { value: passwordMock } });
      });
      expect(result.current.password.target.value).toBe(passwordMock);
    });

    it("should call handleSignIn after submitting", () => {
      const { result } = config;
      const handleSignInSpy = jest.spyOn(FireBaseAPI, "handleSignIn");
      act(() => {
        result.current.onFormSubmit({ preventDefault: () => noop });
      });
      expect(handleSignInSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("Registration", () => {
    beforeEach(() => {
      config = renderHook(
        () => useFormConfigurationWidget(FORM_ACTIONS.REGISTRATION, ACTION_NAVIGATE_PATH.LOGIN),
        {
          wrapper: ApplicationProviders,
        }
      );
    });

    it("should return form configuration", () => {
      const { result } = config;
      expect(result.current.email).toBe("");
      expect(result.current.password).toBe("");
      expect(result.current.handleEmail).toEqual(expect.any(Function));
      expect(result.current.handlePassword).toEqual(expect.any(Function));
      expect(result.current.onFormSubmit).toEqual(expect.any(Function));
    });

    it("should change email value", () => {
      const { result } = config;
      const emailMock = "emailMock@gmail.com";
      act(() => {
        result.current.handleEmail({ target: { value: emailMock } });
      });
      expect(result.current.email.target.value).toBe(emailMock);
    });

    it("should change email value", () => {
      const { result } = config;
      const passwordMock = "mockPassword";
      act(() => {
        result.current.handlePassword({ target: { value: passwordMock } });
      });
      expect(result.current.password.target.value).toBe(passwordMock);
    });

    it("should call handleRegistration after submitting", () => {
      const { result } = config;
      const handleRegistrationSpy = jest.spyOn(
        FireBaseAPI,
        "handleRegistration"
      );
      act(() => {
        result.current.onFormSubmit({ preventDefault: () => noop });
      });
      expect(handleRegistrationSpy).toHaveBeenCalledTimes(1);
    });
  });
});
