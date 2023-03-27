import React from "react";
import { get } from "lodash";
import { TestContext } from "./Context";
import { BreadcrumbPath } from "../Сommon";
import PartialTextInput from "./components/partial-text-input";
import SelectInputQuiz from "./components/select-input";
import TextInput from "./components/text-input";
import useConfiguration from "../Hooks/use-configuration";
import { ContentSection } from "../Tenses/styled";
import { QUIZ_TYPE } from "./constants";

const TestApplication = () => {
    const { data, isLoading, error, renderApplicationGate } = useConfiguration(TestContext);
    const type = get(data, 'getTests[0].type');

    const renderParticularQuiz: Record<string, JSX.Element> = {
        [QUIZ_TYPE.DEFAULT]: <TextInput />,
        [QUIZ_TYPE.SELECT]: <SelectInputQuiz  />,
        [QUIZ_TYPE.PARTIAL]: <PartialTextInput />
    };

    return (
        <React.Fragment>
            <BreadcrumbPath />
            <ContentSection>
                {renderApplicationGate() && renderParticularQuiz[type]}
                {isLoading && <div>Loading...</div>}
                {error && <div>We have some troubles with request...</div>}
            </ContentSection>
        </React.Fragment>
    )
}

export default TestApplication;