import React from "react";
import * as Redux from "react-redux";
import { render, screen } from "@testing-library/react";
import store from "../../store";
import ErrorBoundary from "../../ErrorBoundary";
import { ThemeContext } from "../../Contexts";
import BreadCrumbPath from ".";

const ApplicationProviders = ({ children }: { children: JSX.Element }) => {
  return (
    <ErrorBoundary>
      <Redux.Provider store={store}>
        <ThemeContext>{children}</ThemeContext>
      </Redux.Provider>
    </ErrorBoundary>
  );
};

describe("BreadCrumb", () => {
  beforeEach(() => {
    render(
      <ApplicationProviders>
        <BreadCrumbPath />
      </ApplicationProviders>
    );
  });

  it("should be in the document", () => {
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

});
