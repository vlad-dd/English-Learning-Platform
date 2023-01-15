import React from "react";
import { render, screen } from "@testing-library/react";
import store from "../store";
import ApplicationRoot from "./presentational";
import { Provider } from "react-redux";
import { ThemeContext } from "../Contexts";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary";
import * as UseApplication from './use-application';

jest.mock('./use-application.tsx', () => ({
  useApplication: jest.fn()
}))

const StoreProvider = ({ children }: any) => {
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

describe("ApplicationRoot", () => {
  const useApplicationMock = jest.spyOn(UseApplication, 'useApplication')
  beforeEach(() => {
    useApplicationMock.mockClear();
    useApplicationMock.mockReturnValue({ application: <div>TenseComponent</div> });
    render(
      <StoreProvider>
        <ApplicationRoot />
      </StoreProvider>
    );
  })

  afterEach(() => {
    useApplicationMock.mockClear();
  })

  it('should render component if application exists', () => {
    expect(screen.getByText("TenseComponent")).toBeInTheDocument();
  })
});
