import React, { useState } from "react";
import { GUIDELINE_STEPS } from "../../constants";
import { StyledSteps, StyledTitle } from "./styled";

const StepsGuideline = () => {
    const [current, setCurrent] = useState(0);
    const onChange = (value: number) => {
        setCurrent(value);
      };
    return (
        <React.Fragment>
            <StyledTitle>How to use English Learning Platform? 🤔</StyledTitle>
            <StyledSteps
              data-testid="steps-guideline"
              current={current}
              onChange={onChange}
              direction="horizontal"
              items={GUIDELINE_STEPS}
            />
        </React.Fragment>
    )
}

export default StepsGuideline;