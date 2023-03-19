import React, { RefObject, useContext, useRef } from "react";
import { TestContext } from "../../Context";
import { StyledLabel, StyledTextInputWrapper } from "./styled";
import DefaultTextInput from "./default-input";
import { ITestItem } from "../../types";
import { get } from "lodash";

const TextInput = () => {
    const { data } = useContext(TestContext)!;
    const { config } = get(data, 'getTests[0]')
    const textInputRefs = useRef<RefObject<HTMLInputElement>[]>([]);

    return (
        <React.Fragment>
            {config.map(({ label, correctAnswer }: ITestItem, index: number) => {
                return (
                    <StyledTextInputWrapper key={label}>
                        <StyledLabel data-testid="text-input-label" aria-label="mixed verbs sentence">
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
