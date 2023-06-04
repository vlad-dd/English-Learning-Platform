import { render, screen } from '@testing-library/react';
import * as EnglishLevelWidget from './use-english-level-widget';
import EnglishLevelRoot from './presentational';
import { buildApolloError } from '../test-utils';
import { withApolloProvider, withRouterProvider } from '../test-utils/hocs';

jest.mock("react-quiz-component", () => () => <div data-testid="level-quiz-component" />);
jest.mock("./styled", () => ({
    ...jest.requireActual("./styled"),
    StyledSteps: () => <div data-testid="progress-steps-component" />
}))
const TEST_IDS = [
    "level-quiz-component",
    "progress-steps-component",
];

const EnglishLevelRootWithProvider = withRouterProvider(withApolloProvider(EnglishLevelRoot));

describe('English Level', () => {
    const widget = jest.spyOn(EnglishLevelWidget, "useEnglishLevelWidget");
    const props: any = {
        quiz: { questions: [0,0,0] },
        submitCurrentAnswer: jest.fn(),
        generateLevelFeedback: jest.fn(),
        classifiedLevel: "B1",
        stepIndex: 1,
        progressSteps: [],
        isLoading: false,
        error: undefined
    };

    it('should render component after completing the condition', () => {
        widget.mockReturnValue(props);
        render(<EnglishLevelRootWithProvider />);
        TEST_IDS.forEach((id: string) => expect(screen.getByTestId(id)).toBeInTheDocument());
        expect(screen.getByText("English Proficiency Level Test")).toBeInTheDocument();
        expect(screen.getByText("Your english level is B1")).toBeInTheDocument();
        expect(screen.getByTestId("classified-level-container")).toBeInTheDocument();
    });

    it('should render component after completing the condition but without the level', () => {
        widget.mockReturnValue({ ...props, classifiedLevel: null });
        render(<EnglishLevelRootWithProvider />);
        TEST_IDS.forEach((id: string) => expect(screen.getByTestId(id)).toBeInTheDocument());
        expect(screen.queryByTestId("classified-level-container")).not.toBeInTheDocument();
    });

    it('should return loading circle if component is loading', () => {
        widget.mockReturnValue({ ...props, isLoading: true });
        render(<EnglishLevelRootWithProvider />);
        expect(screen.getByTestId("loading-progress")).toBeInTheDocument();
        TEST_IDS.forEach((id: string) => expect(screen.queryByTestId(id)).not.toBeInTheDocument());
    });

    it('should return error page if error exists', () => {
        widget.mockReturnValue({ ...props, error: buildApolloError() });
        render(<EnglishLevelRootWithProvider />);
        expect(screen.getByTestId("error-page")).toBeInTheDocument();
    });
});