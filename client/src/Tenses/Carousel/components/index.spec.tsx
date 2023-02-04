/* eslint-disable react/display-name */
import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../store";
import { ThemeContext } from "../../../Contexts";
import ErrorBoundary from "../../../ErrorBoundary";
import CarouselQuiz from ".";

jest.mock("./use-practice-data", () => ({
    usePracticeData: () => sentenceMock
}));

jest.mock('../styled', () => ({
    ...jest.requireActual('../styled'),
    CarouselVariant: () => <div data-testid="carousel-variant">Variant</div>
}));

jest.mock('./default-carousel-input', () => () => <div data-testid="default-carousel-input">Default Carousel Input</div>)

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

const sentenceMock = [
    {
      id: 1,
      label: "MockLabel",
      partOne: "MockPartOne",
      partTwo: "MockPartTwo",
      missed: "MockMissed",
    },
];

describe("CarouselQuiz", () => {

  beforeEach(() => {
    render(<ApplicationProviders><CarouselQuiz /></ApplicationProviders>);
  });

  it("should render CarouselVariant", () => {
    expect(screen.getByTestId("carousel-variant")).toBeInTheDocument();
    expect(screen.getByText('Variant')).toBeInTheDocument();
  });

  it("should render CarouselInput", () => {
    expect(screen.getByTestId("default-carousel-input")).toBeInTheDocument();
    expect(screen.getByText('Default Carousel Input')).toBeInTheDocument();
  });
});
