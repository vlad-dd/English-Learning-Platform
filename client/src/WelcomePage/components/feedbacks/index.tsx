import React from "react";
import { FormattedMessage } from "react-intl";
import { Title } from "../../../Сommon";
import { useLearnersFeedbackWidget } from "./use-learners-feedback";
import { WELCOME_PAGE } from "../../../translations/constants";
import { LEARNER_FEEDBACK_DATA_TEST_ID } from "../../constants";

const LearnerFeedbacks = () => {

    const { feedbacks } = useLearnersFeedbackWidget();

    return (
        <React.Fragment>
            <Title styles={{ paddingTop: "50px" }}>
                <FormattedMessage id={WELCOME_PAGE.FEEDBACKS_TITLE} />
            </Title>
            <div data-testid={LEARNER_FEEDBACK_DATA_TEST_ID}>
                {feedbacks}
            </div>
        </React.Fragment>
    )
}

export default LearnerFeedbacks;