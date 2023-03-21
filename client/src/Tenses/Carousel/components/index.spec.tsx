import React from "react";
import { render, screen } from "@testing-library/react";
import CarouselQuiz from ".";
import { TenseApplicationProviders } from "../../jest-utils";

jest.mock("./use-practice-data", () => ({
  usePracticeData: () => sentenceMock
}));

jest.mock('../styled', () => ({
  ...jest.requireActual('../styled'),
  CarouselVariant: () => <div data-testid="carousel-variant">Variant</div>
}));

jest.mock('./default-carousel-input', () => () => <div data-testid="default-carousel-input">Default Carousel Input</div>)

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
    render(
      <TenseApplicationProviders>
        <CarouselQuiz />
      </TenseApplicationProviders>
    );
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
