import React from "react";
import { render, screen } from "@testing-library/react";
import LearnerFeedbacks from ".";
import { withIntlProvider } from "../../../test-utils/hocs";

const LearnerFeedbacksWithProvider = withIntlProvider(LearnerFeedbacks);

describe('StepsGuideline', () => {
    it('should render component', () => {
       render(<LearnerFeedbacksWithProvider />);
       expect( screen.getByTestId("learner-feedbacks")).toBeInTheDocument();
    });
})