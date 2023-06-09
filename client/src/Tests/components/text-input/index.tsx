import React, { RefObject, useRef } from "react";
import { useTextInputWidget } from "./use-text-input-widget";
import DefaultTextInput from "./default-input";
import { ITestItem } from "../../types";
import { TEXT_INPUT_LABEL_DATA_TEST_ID } from "../../constants";
import { StyledLabel, StyledTextInputWrapper } from "./styled";

const TextInput = () => {
    const { config } = useTextInputWidget();

    const textInputRefs = useRef<RefObject<HTMLInputElement>[]>([]);

    return (
        <React.Fragment>
            {config.map(({ label, correctAnswer }: ITestItem, index: number) => {
                return (
                    <StyledTextInputWrapper key={label}>
                        <StyledLabel data-testid={TEXT_INPUT_LABEL_DATA_TEST_ID}>
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
