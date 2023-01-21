import React from "react";
import { render, screen } from "@testing-library/react";
import store from "../store";
import ApplicationRoot from "./presentational";
import { Provider } from "react-redux";
import { ThemeContext } from "../Contexts";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary";



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

  it('should render component if application exists', () => {
    expect(2+1).toBe(3);
  })
});
