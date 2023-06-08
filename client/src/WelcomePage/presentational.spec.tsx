import { render, screen } from '@testing-library/react'
import { withApolloProvider, withIntlProvider, withReduxProvider, withRouterProvider } from '../test-utils/hocs';
import { CARDS_INFORMATION_LIST, GUIDELINE_STEPS_DATA_TEST_ID, LEARNER_FEEDBACK_DATA_TEST_ID, PLATFORM_CARDS_DATA_TEST_ID, REPORT_SERVICE_ICON_DATA_TEST_ID, SOCIAL_MEDIAS_DATA_TEST_ID, WELCOME_PAGE_SECTION_DATA_TEST_ID } from './constants';
import WelcomePage from './presentational';

const WELCOME_PAGE_HEADER_NODES = [
    "English Learning Platform",
    "Active Users"
];

const WELCOME_PAGE_CARD_NODES = [
    "Our Goal 🎯",
    "Active Users",
    "Our platform is designed to provide comprehensive resources and tools that will help you enhance your English language proficiency.",
    "Always Up-to-Date 🔄",
    "Our grammar information and dictionary are regularly updated to ensure that you have access to the latest and most accurate information.",
    "Platform Structure 🗂"
];

describe('Welcome Page', () => {
   const WelcomePageWithProvider = withRouterProvider(withApolloProvider(withReduxProvider(withIntlProvider(WelcomePage))));

    beforeEach(() => {
        render(<WelcomePageWithProvider />);
    });

    it('should render Welcome Page header', () => {
        expect(screen.getByTestId(WELCOME_PAGE_SECTION_DATA_TEST_ID)).toBeInTheDocument();
        WELCOME_PAGE_HEADER_NODES.forEach((node: string) => expect(screen.getByText(node)).toBeInTheDocument());
    });

    it('should render Welcome Page cards', () => {
        expect(screen.getByTestId(PLATFORM_CARDS_DATA_TEST_ID)).toBeInTheDocument();
        WELCOME_PAGE_CARD_NODES.map((node: string) => expect(screen.getByText(node)).toBeInTheDocument());
        CARDS_INFORMATION_LIST.map(({ title }) => expect(screen.getByText(title)).toBeInTheDocument());
    });

    it('should render step guideline', () => {
        expect(screen.getByTestId(GUIDELINE_STEPS_DATA_TEST_ID)).toBeInTheDocument();
        expect(screen.getByText("How to use English Learning Platform? 🤔")).toBeInTheDocument();
    });

    it('should render learners feedbacks', () => {
        expect(screen.queryAllByTestId(LEARNER_FEEDBACK_DATA_TEST_ID).at(0)).toBeInTheDocument();
        expect(screen.getByText("Our Learners Feedback🎓")).toBeInTheDocument();
    });

    it('should render report service icon', () => {
        expect(screen.getByTestId(REPORT_SERVICE_ICON_DATA_TEST_ID)).toBeInTheDocument();
    });

    it('should render social media section', () => {
        expect(screen.getByTestId(SOCIAL_MEDIAS_DATA_TEST_ID)).toBeInTheDocument();
    });
});
