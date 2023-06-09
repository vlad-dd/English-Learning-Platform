import React, { useEffect, useLayoutEffect } from "react";
import { Input } from 'antd';
import { isNil } from "lodash";
import { focusNodeAfterMounting } from "../../../utils/utils";
import { useSubmitAnswerWidget } from "../../use-submit";
import { IPartialInput } from "../../types";
import { BORDERS, PARTIAL_TEXT_INPUT_ID } from "../../constants";
import { StyledPartialInputWrapper } from "./styled";
import { usePartialInputWidget } from "./use-partial-input-widget";

const PartialTextInput = () => {
    const { config, answerToSubmit, setAnswerToSubmit } = usePartialInputWidget();
    const { submittedResult, submitAnswer } = useSubmitAnswerWidget();

    useEffect(() => {
        setAnswerToSubmit('');
    }, [submittedResult]);

    useLayoutEffect(() => {
        focusNodeAfterMounting(PARTIAL_TEXT_INPUT_ID);
    }, []);

    return (
        <React.Fragment>
            {config.map(({ id, textBefore, textAfter, defaultValue, correctAnswer }: IPartialInput, index: number) => {
                const isDisabled = (!isNil(submittedResult) && submittedResult[index]) ? true : false;
                return (
                    <StyledPartialInputWrapper key={id}>
                        <Input
                            id={PARTIAL_TEXT_INPUT_ID}
                            data-testid={PARTIAL_TEXT_INPUT_ID}
                            disabled={isDisabled}
                            style={{ border: !isNil(submittedResult) && BORDERS[submittedResult[index]] }}
                            addonBefore={textBefore}
                            addonAfter={textAfter}
                            defaultValue={defaultValue}
                            onKeyDown={({ key }: { key: string }) => submitAnswer(key, index, correctAnswer, answerToSubmit)}
                            onChange={({ target: { value } }) => setAnswerToSubmit(value)}
                        />
                    </StyledPartialInputWrapper>
                )
            })}
        </React.Fragment>
    )
}

export default PartialTextInput;