import React from "react";
import { StyledLabel, StyledTextInputWrapper } from "./styled";
import DefaultTextInput from "./default-input";

const props = [
    {
        label: 'She ... her homework every day. (Do)',
        correctAnswer: 'Does'
    },
    {
        label: 'He ... her homework every day. (Do)',
        correctAnswer: 'Does'
    },
    {
        label: 'It ... her homework every day. (Do)',
        correctAnswer: 'w'
    }
]


const TextInput = () => {
    return (
        <React.Fragment>
            {props.map(({ label, correctAnswer }: any, index: any) => {
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