import React, { MutableRefObject, RefObject, useRef } from "react";
import { StyledLabel, StyledTextInputWrapper } from "./styled";
import DefaultTextInput from "./default-input";
import { ITestItems, ITestItem } from "../../types";


const TextInput = ({ config }: Pick<ITestItems, 'config'>) => {
    const textInputRefs = useRef<any>([]);

    return (
        <React.Fragment>
            {config.map(({ label, correctAnswer }: ITestItem, index: number) => {
                return (
                    <StyledTextInputWrapper key={label}>
                        <StyledLabel aria-label="mixed verbs sentence">
                            {label}
                        </StyledLabel>
                        <DefaultTextInput
                            index={index}
                            ref={(element: RefObject<HTMLInputElement>) => textInputRefs.current[index] = element}
                            correctAnswer={correctAnswer}
                            textInputRefs={textInputRefs}
                        />
                    </StyledTextInputWrapper>
                )
            })}
        </React.Fragment>
    )
}

export default TextInput;
