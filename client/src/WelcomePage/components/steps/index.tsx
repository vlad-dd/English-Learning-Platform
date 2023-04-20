import React, { useLayoutEffect, useState } from "react";
import { size } from "lodash";
import { GUIDELINE_STEPS } from "../../constants";
import { StyledSteps, StyledTitle } from "./styled";

const StepsGuideline = () => {
  const [current, setCurrent] = useState(0);

  useLayoutEffect(() => {
    const elementToClick = document.querySelectorAll('div[role="button"]')[1];
    elementToClick?.dispatchEvent(new Event('click', { bubbles: true }));
  }, []);

  return (
    <React.Fragment>
      <StyledTitle>How to use English Learning Platform? 🤔</StyledTitle>
      <StyledSteps
        data-testid="steps-guideline"
        current={current}
        onChange={() => {
          if (current < size(GUIDELINE_STEPS)) {
            setInterval(() => setCurrent((prev: number) => prev + 1), 3500)
          }
        }}
        direction="horizontal"
        items={GUIDELINE_STEPS}
      />
    </React.Fragment>
  )
}

export default StepsGuideline;