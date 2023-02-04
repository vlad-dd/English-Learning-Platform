import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorBoundary from ".";

describe("Error Boundary", () => {
  it("Error Boundary", () => {
    const ThrowError = () => {
      throw new Error("Test");
    };
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    expect(screen.getByText("Something went wrong. Our team is already working on this problem.")).toBeInTheDocument();
    expect(screen.getByRole('img').getAttribute('src')).toBe('https://img.freepik.com/free-vector/oops-404-error-with-a-broken-robot-concept-illustration_114360-5529.jpg?w=2000');
  });
});
