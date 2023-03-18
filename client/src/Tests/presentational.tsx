import React, { useContext } from "react";
import { ContentSection } from "../Tenses/styled";
import { BreadcrumbPath } from "../Сommon";
import PartialTextInput from "./components/partial-text-input";
import SelectInputQuiz from "./components/select-input";
import TextInput from "./components/text-input";
import { TestContext } from "./Context";

const TestApplication = () => {
    const { type, isLoading, error } = useContext(TestContext)!;
    const conditionGate = () => !!type && !isLoading && !error;

    const renderParticularQuiz: { [key: string]: JSX.Element } = {
        default: <TextInput />,
        select: <SelectInputQuiz  />,
        partial: <PartialTextInput />
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