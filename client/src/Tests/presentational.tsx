import React from "react";
import { ContentSection } from "../Tenses/styled";
import { BreadcrumbPath } from "../Сommon";
import PartialTextInput from "./components/partial-text-input";
import SelectInputQuiz from "./components/select-input";
import TextInput from "./components/text-input";

const TestApplication = () => {
    return (
        <React.Fragment>
            <BreadcrumbPath />
            <ContentSection>
                {/* <TextInput /> */}
                {/* <SelectInputQuiz /> */}
                <PartialTextInput />
            </ContentSection>
        </React.Fragment>
    )
}

export default TestApplication;