import { render, screen } from '@testing-library/react'
import { withApolloProvider, withIntlProvider, withReduxProvider, withRouterProvider } from '../test-utils/hocs';
import { CARDS_INFORMATION_LIST } from './constants';
import WelcomePage from './presentational';

describe('Welcome Page', () => {
   const WelcomePageWithProvider = withRouterProvider(withApolloProvider(withReduxProvider(withIntlProvider(WelcomePage))));
    beforeEach(() => {
        render(<WelcomePageWithProvider />)
    });

    it('should render Welcome Page root', () => {
        expect(screen.getByTestId('welcome-page-section')).toBeInTheDocument();
        expect(screen.getByText("English Learning Platform")).toBeInTheDocument();
        expect(screen.getByText("Active Users")).toBeInTheDocument();
    });

    it('should render Welcome Page cards', () => {
        expect(screen.getByTestId("platform-cards")).toBeInTheDocument();
        expect(screen.getByText("Our Goal 🎯")).toBeInTheDocument();
        expect(screen.getByText("Our platform is designed to provide comprehensive resources and tools that will help you enhance your English language proficiency.")).toBeInTheDocument();
        expect(screen.getByText("Always Up-to-Date 🔄")).toBeInTheDocument();
        expect(screen.getByText("Our grammar information and dictionary are regularly updated to ensure that you have access to the latest and most accurate information.")).toBeInTheDocument();
        expect(screen.getByText("Platform Structure 🗂")).toBeInTheDocument();
        CARDS_INFORMATION_LIST.map(({ title }) => expect(screen.getByText(title)).toBeInTheDocument());
    });

    it('should render step guideline', () => {
        expect(screen.getByTestId("steps-guideline")).toBeInTheDocument();
        expect(screen.getByText("How to use English Learning Platform? 🤔")).toBeInTheDocument();
    });

    it('should render learners feedbacks', () => {
        expect(screen.queryAllByTestId("learner-feedbacks")[0]).toBeInTheDocument();
        expect(screen.getByText("Our Learners Feedback🎓")).toBeInTheDocument();
    });

    it('should render report service icon', () => {
        expect(screen.getByTestId("report-service-icon")).toBeInTheDocument();
    });

    it('should render social media section', () => {
        expect(screen.getByTestId("social-medias-section")).toBeInTheDocument();
    });
});
