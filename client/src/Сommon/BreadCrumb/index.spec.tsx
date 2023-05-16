
import { render, screen } from "@testing-library/react";
import * as ReactRouterDOM from "react-router-dom";
import * as ReactRedux from "react-redux";
import store from "../../store";
import ErrorBoundary from "../../ErrorBoundary";
import { ThemeContext } from "../../Contexts";
import BreadCrumbPath from ".";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn()
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn()
}));

const ApplicationProviders = ({ children }: { children: JSX.Element }) => {
  return (
    <ReactRouterDOM.BrowserRouter>
      <ErrorBoundary>
        <ReactRedux.Provider store={store}>
          <ThemeContext>{children}</ThemeContext>
        </ReactRedux.Provider>
      </ErrorBoundary>
    </ReactRouterDOM.BrowserRouter>
  );
};

describe("BreadCrumb", () => {
  const URLParts = ['my', 'url', 'to', 'page'];
  const stringURLParts = "my/url/to/page";
  const reactReduxSpy = jest.spyOn(ReactRedux, "useSelector");
  const reactRouterDOMSpy: any = jest.spyOn(ReactRouterDOM, "useLocation");

  it("should render path from state if user has clicked on menu options", () => {
    reactReduxSpy.mockReturnValue({ path: URLParts });
    reactRouterDOMSpy.mockReturnValue({ pathname: "" });
    render(
      <ApplicationProviders>
        <BreadCrumbPath />
      </ApplicationProviders>
    );
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    URLParts.forEach((part: string) => expect(screen.getByText(part)).toBeInTheDocument());
  });

  it('should render path from window location if user has gone by url', () => {
    reactReduxSpy.mockReturnValue({ path: [] });
    reactRouterDOMSpy.mockReturnValue({ pathname: stringURLParts });
    render(
      <ApplicationProviders>
        <BreadCrumbPath />
      </ApplicationProviders>
    );
    stringURLParts.split('/').forEach((part: string) =>  expect(screen.getByText(part)).toBeInTheDocument())
  });

});
