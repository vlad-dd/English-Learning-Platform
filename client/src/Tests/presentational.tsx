import React from "react";
import { get, size } from "lodash";
import { BreadcrumbPath, LoadingProgress } from "../Сommon";
import { useTestConfigurationWidget } from "./use-test-configuration";
import PartialTextInput from "./components/partial-text-input";
import SelectInputQuiz from "./components/select-input";
import TextInput from "./components/text-input";
import { ContentSection } from "../Tenses/styled";
import { QUIZ_TYPE } from "./constants";

const TestApplication = () => {
    const { data, isLoading, error } = useTestConfigurationWidget();
    const type = get(data, 'getTests[0].type');

    const renderParticularQuiz: Record<string, JSX.Element> = {
        [QUIZ_TYPE.DEFAULT]: <TextInput />,
        [QUIZ_TYPE.SELECT]: <SelectInputQuiz />,
        [QUIZ_TYPE.PARTIAL]: <PartialTextInput />
    };

    if (isLoading || !size(data)) {
        return <LoadingProgress />
    }

    if (error) {
        return <div>We have some troubles with request...</div>
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