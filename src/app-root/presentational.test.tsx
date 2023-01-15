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
  beforeEach(() => {
    render(
      <StoreProvider>
        <ApplicationRoot />
      </StoreProvider>
    );
  })

  it("should render default page if there is not application available", () => {
    expect(screen.getByText("Default Page")).toBeInTheDocument();
  });

  // it('qwe', () => {
    // eslint-disable-next-line react/display-name

    // const mockUseApplication = useApplication as jest.MockedFunction<typeof useApplication>
    // mockUseApplication.mockReturnValue({ application: <div>MockTenseComponent</div> })

  //   expect(screen.getByText("1")).toBeInTheDocument();
  // })
});
