import React, { useLayoutEffect, useState } from "react";
import { size } from "lodash";
import { GUIDELINE_STEPS, GUIDELINE_STEPS_DATA_TEST_ID } from "../../constants";
import { StyledSteps, StyledTitle } from "./styled";
import { FormattedMessage } from "react-intl";
import { WELCOME_PAGE } from "../../../translations/constants";

const StepsGuideline = () => {
  const [current, setCurrent] = useState(0);

  useLayoutEffect(() => {
    const elementToClick = document.querySelectorAll('div[role="button"]')[1];
    elementToClick?.dispatchEvent(new Event('click', { bubbles: true }));
  }, []);

  return (
    <React.Fragment>
      <StyledTitle>
        <FormattedMessage id={WELCOME_PAGE.GUIDELINE_TITLE}/>
      </StyledTitle>
      <StyledSteps
        data-testid={GUIDELINE_STEPS_DATA_TEST_ID}
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