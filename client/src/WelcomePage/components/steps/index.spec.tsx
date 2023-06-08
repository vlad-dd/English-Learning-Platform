import { render, screen } from "@testing-library/react";
import StepsGuideline from ".";
import { withIntlProvider } from "../../../test-utils/hocs";
import { GUIDELINE_STEPS_DATA_TEST_ID } from "../../constants";

const StepsGuidelineWithProvider = withIntlProvider(StepsGuideline);

describe('StepsGuideline', () => {
    it('should render component', () => {
        const expectedSteps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];
        const expectedStepInformation = ['Identify your level', 'Explore the grammar', 'Pass the tests', 'Use the dictionary with word listening options'];
        render(<StepsGuidelineWithProvider />)
        expect(screen.getByTestId(GUIDELINE_STEPS_DATA_TEST_ID)).toBeInTheDocument();
        expectedSteps.forEach((step: string) => expect(screen.getByText(step)).toBeInTheDocument());
        expectedStepInformation.forEach((information: string) => expect(screen.getByText(information)).toBeInTheDocument());
    });
})