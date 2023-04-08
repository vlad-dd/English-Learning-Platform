import React from "react";
import { render, screen } from "@testing-library/react";
import LearnerFeedbacks from ".";

describe('StepsGuideline', () => {
    it('should render component', () => {
       render(<LearnerFeedbacks />);
       expect( screen.getByTestId("learner-feedbacks")).toBeInTheDocument();
    });
})