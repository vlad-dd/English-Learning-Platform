import React, { useContext } from "react";
import { get } from "lodash";
import { ContentSection } from "../Tenses/styled";
import { BreadcrumbPath } from "../Сommon";
import PartialTextInput from "./components/partial-text-input";
import SelectInputQuiz from "./components/select-input";
import TextInput from "./components/text-input";
import { TestContext } from "./Context";
import { ITestItems } from "./types";

const TestApplication = () => {
    const { data, isLoading, error } = useContext(TestContext)!;
    const configuration: ITestItems = get(data, 'getTests[0]');
    const conditionGate = () => !!configuration && !isLoading && !error;

    const renderParticularQuiz: { [key: string]: JSX.Element } = {
        default: <TextInput config={configuration?.config} />,
        select: <SelectInputQuiz  />,
        partial: <PartialTextInput />
    }

    return (
        <React.Fragment>
            <BreadcrumbPath />
            <ContentSection>
                {conditionGate() && renderParticularQuiz[configuration.type]}
                {isLoading && <div>Loading...</div>}
                {error && <div>We have some troubles with request {error}</div>}
            </ContentSection>
        </React.Fragment>
    )
}

export default TestApplication;