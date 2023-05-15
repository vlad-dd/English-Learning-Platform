import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorBoundary from ".";
import { BrowserRouter } from "react-router-dom";
import { ELP_USER_EXPERIENCE_ERRORS } from "../Сommon/error-handler-page/constants";

describe("Error Boundary", () => {
  it("Error Boundary", () => {
    const ThrowError = () => {
      throw new Error("Test");
    };
    render(
      <BrowserRouter>
        <ErrorBoundary>
          <ThrowError />
        </ErrorBoundary>
      </BrowserRouter>
    );
    expect(screen.getByTestId("error-page")).toBeInTheDocument();
    expect(screen.getByText(ELP_USER_EXPERIENCE_ERRORS.UNEXPECTED_BREAK)).toBeInTheDocument();
  });
});
