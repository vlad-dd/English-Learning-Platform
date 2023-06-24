import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorBoundary from ".";
import { BrowserRouter } from "react-router-dom";
import { ELP_USER_EXPERIENCE_ERRORS } from "../Сommon/error-handler-page/constants";
import { withIntlProvider } from "../test-utils/hocs";

describe("Error Boundary", () => {
  it("Error Boundary", () => {
    const ThrowError = () => {
      throw new Error("Test");
    };

    const ErrorBoundaryRoot = () => {
      return (
        <BrowserRouter>
          <ErrorBoundary>
            <ThrowError />
          </ErrorBoundary>
        </BrowserRouter>
      )
    }
    const ErrorBoundaryRootWithProviders = withIntlProvider(ErrorBoundaryRoot);
    render(<ErrorBoundaryRootWithProviders />);
    expect(screen.getByTestId("error-page")).toBeInTheDocument();
    expect(screen.getByText(ELP_USER_EXPERIENCE_ERRORS.UNEXPECTED_BREAK)).toBeInTheDocument();
  });
});