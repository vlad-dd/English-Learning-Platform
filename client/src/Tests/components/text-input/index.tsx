import React, { RefObject, useContext, useRef } from "react";
import { get } from "lodash";
import { TestContext } from "../../Context";
import { StyledLabel, StyledTextInputWrapper } from "./styled";
import DefaultTextInput from "./default-input";
import { ITestItems, ITestItem } from "../../types";

const TextInput = () => {
    const { data } = useContext(TestContext)!;
    const { config }: ITestItems = get(data, 'getTests[0]');
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
