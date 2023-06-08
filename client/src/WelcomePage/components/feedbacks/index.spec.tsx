import { render, screen } from "@testing-library/react";
import LearnerFeedbacks from ".";
import { withIntlProvider } from "../../../test-utils/hocs";
import { LEARNER_FEEDBACK_DATA_TEST_ID } from "../../constants";

const LearnerFeedbacksWithProvider = withIntlProvider(LearnerFeedbacks);

describe('StepsGuideline', () => {
    it('should render component', () => {
       render(<LearnerFeedbacksWithProvider />);
       expect(screen.getByTestId(LEARNER_FEEDBACK_DATA_TEST_ID)).toBeInTheDocument();
    });
})