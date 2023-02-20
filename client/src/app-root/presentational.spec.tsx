import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import store from "../store";
import ApplicationRoot from "./presentational";
import { Provider } from "react-redux";
import { ThemeContext } from "../Contexts";
import ErrorBoundary from "../ErrorBoundary";

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

const MockTree = () => {
  return (
    <div>
      <h1>Mock Tree</h1>
      <div>App</div>
    </div>
  );
};

describe("ApplicationRoot", () => {
    beforeEach(() => {
        render(
            <ApplicationProviders>
                <>
                    <ApplicationRoot />
                    <MockTree />
                </>
            </ApplicationProviders>
        );
    });

  it("should render sider menu", () => {
    expect(screen.getByTestId("application-layout")).toBeInTheDocument();
    expect(screen.getByText("Tenses")).toBeInTheDocument();
    expect(screen.getByText("Grammar Levels")).toBeInTheDocument();
    expect(screen.getByText("Dictionary")).toBeInTheDocument();
    expect(screen.getByText("Releases")).toBeInTheDocument();
  });

  it("should render application tree", () => {
    expect(screen.getByText("Mock Tree")).toBeInTheDocument();
    expect(screen.getByText("App")).toBeInTheDocument();
  });
});
