import React from "react";
import { get, size } from "lodash";
import { BreadcrumbPath, LoadingProgress } from "../Сommon";
import { useTestConfigurationWidget } from "./use-test-configuration";
import { ContentSection } from "../Tenses/styled";
import ErrorPage from "../Сommon/error-handler-page/not-found-url";
import { ELP_USER_EXPERIENCE_ERRORS } from "../Сommon/error-handler-page/constants";
import TextInput from "./components/text-input";
import SelectInputQuiz from "./components/select-input";
import PartialTextInput from "./components/partial-text-input";
import { QUIZ_TYPE } from "./constants";

const TestApplication = () => {

    const { data, isLoading, error } = useTestConfigurationWidget();

    const type = get(data, 'getTests[0].type');

    const renderParticularQuiz: Record<string, JSX.Element> = {
        [QUIZ_TYPE.DEFAULT]: <TextInput />,
        [QUIZ_TYPE.SELECT]: <SelectInputQuiz />,
        [QUIZ_TYPE.PARTIAL]: <PartialTextInput />
    };

    if ((isLoading || !size(type) && !error)) {
        return <LoadingProgress />
    }

    if (error) {
        if (error.networkError) {
            return <ErrorPage error={ELP_USER_EXPERIENCE_ERRORS.SERVER_ERROR} />
        } else {
            return <ErrorPage error={ELP_USER_EXPERIENCE_ERRORS.UNEXPECTED_BREAK} />
        }
    }

    return (
        <React.Fragment>
            <BreadcrumbPath />
            <ContentSection>
                {renderParticularQuiz[type]}
            </ContentSection>
        </React.Fragment>
    );
}

export default TestApplication;