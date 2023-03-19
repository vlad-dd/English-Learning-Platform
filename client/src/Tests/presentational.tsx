import { get } from "lodash";
import React, { useContext } from "react";
import { ContentSection } from "../Tenses/styled";
import { BreadcrumbPath } from "../Сommon";
import PartialTextInput from "./components/partial-text-input";
import SelectInputQuiz from "./components/select-input";
import TextInput from "./components/text-input";
import { QUIZ_TYPE } from "./constants";
import { TestContext } from "./Context";

const TestApplication = () => {
    const { data, isLoading, error } = useContext(TestContext)!;
    const conditionGate = (): boolean => !!data && !isLoading && !error;
    const type = get(data, 'getTests[0].type');

    const renderParticularQuiz: { [key: string]: JSX.Element } = {
        [QUIZ_TYPE.DEFAULT]: <TextInput />,
        [QUIZ_TYPE.SELECT]: <SelectInputQuiz  />,
        [QUIZ_TYPE.PARTIAL]: <PartialTextInput />
    };

    return (
        <React.Fragment>
            <BreadcrumbPath />
            <ContentSection>
                {conditionGate() && renderParticularQuiz[type]}
                {isLoading && <div>Loading...</div>}
                {error && <div>We have some troubles with request...</div>}
            </ContentSection>
        </React.Fragment>
    )
}

export default TestApplication;