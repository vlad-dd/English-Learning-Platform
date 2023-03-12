import React from "react";
import { StyledLabel, StyledTextInputWrapper } from "./styled";
import DefaultTextInput from "./default-input";

const TextInput = ({ config }: any) => {
    return (
        <React.Fragment>
            {config.map(({ label, correctAnswer }: any, index: any) => {
                return (
                    <StyledTextInputWrapper key={label}>
                        <StyledLabel aria-label="mixed verbs sentence">
                            {label}
                        </StyledLabel>
                        <DefaultTextInput
                            index={index}
                            correctAnswer={correctAnswer}
                        />
                    </StyledTextInputWrapper>
                )
            })}
        </React.Fragment>
    )
}

export default TextInput;