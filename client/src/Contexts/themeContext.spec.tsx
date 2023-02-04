import React, { useContext } from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ThemeContext, { ThemeStateController } from "./themeContext";
import * as Hooks from '../Hooks';
import ErrorBoundary from "../ErrorBoundary";
import { Provider } from "react-redux";
import store from "../store";
import { noop } from "lodash";

jest.mock('../Hooks', () => ({
    ...jest.requireActual('../Hooks'),
    useBoolean: jest.fn()
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

const MockContextComponent = () => {
 const { theme, defaultTheme, themeInHex, fonts } = useContext(ThemeStateController)
  return (
    <div>
      <h1>Mock Context</h1>
      <div>{theme}</div>
      <div>{JSON.stringify(defaultTheme)}</div>
      <div>{themeInHex}</div>
      <div>{fonts}</div>
    </div>
  );
};

it("should render false theme context configuration", () => {
  const ThemeContextSpy = jest.spyOn(Hooks, 'useBoolean');
  ThemeContextSpy.mockReturnValue([false, noop])

  const values =  ['dark', 'false', '#001529', '#fff']
  render(
    <ApplicationProviders>
      <MockContextComponent />
    </ApplicationProviders>
  );
  values.forEach((value) => expect(screen.getByText(value)).toBeInTheDocument());
});

it("should render true theme context configuration", () => {
    const ThemeContextSpy = jest.spyOn(Hooks, 'useBoolean');
    ThemeContextSpy.mockReturnValue([true, noop])
  
    const values =  ['light', 'true', 'black', '#fff']
    render(
      <ApplicationProviders>
        <MockContextComponent />
      </ApplicationProviders>
    );
    values.forEach((value) => expect(screen.getByText(value)).toBeInTheDocument());
  });