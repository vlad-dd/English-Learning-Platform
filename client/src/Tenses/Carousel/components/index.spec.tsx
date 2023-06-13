import { render, screen } from "@testing-library/react";
import { withApolloProvider, withIntlProvider, withReduxProvider, withRouterProvider } from "../../../test-utils/hocs";
import * as CarouselWidget from "./use-carousel-widget";
import { ICarouselWidget } from "../../types";
import { ALERT_BANNER_DATA_TEST_ID, DEFAULT_CAROUSEL_INPUT_DATA_TEST_ID } from "../../constants";
import CarouselQuiz from ".";

jest.mock("./use-carousel-widget")

const DATA_MOCK: ICarouselWidget = {
  sentences: [
    {
      __typename: "Sentence Mock",
      id: 0,
      label: "MockLabel",
      partOne: "MockPartOne",
      partTwo: "MockPartTwo",
      missed: "MockMissed",
    },
  ],
  actualSentenceIndex: 0,
  alertController: <div>1</div>,
  questionProps: 
    {
      borderColor: "1px solid green",
      showLastBanner: false,
      value: "",
      handleCheck: jest.fn(),
      setValue: jest.fn()
    }
  ,
  nullifyProgress: jest.fn()
}

const CarouselQuizWithProvider = withRouterProvider(withApolloProvider(withReduxProvider(withIntlProvider(CarouselQuiz))));

describe("CarouselQuiz", () => {
  const carouselWidgetSpy = jest.spyOn(CarouselWidget, "useCarouselWidget");
  beforeEach(() => {
    carouselWidgetSpy.mockReturnValue(DATA_MOCK);
    render(<CarouselQuizWithProvider />);
  });

  it("should render CarouselInput", () => {
    expect(screen.getByTestId(DEFAULT_CAROUSEL_INPUT_DATA_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(ALERT_BANNER_DATA_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText('MockLabel')).toBeInTheDocument();
    expect(screen.getByText('MockPartOne')).toBeInTheDocument();
    expect(screen.getByText('MockPartTwo')).toBeInTheDocument();
  });
});
