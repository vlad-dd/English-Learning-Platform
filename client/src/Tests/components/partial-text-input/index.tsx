import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Input } from 'antd';
import { get, isNil } from "lodash";
import { BORDERS, PARTIAL_TEXT_INPUT_ID } from "../../constants";
import { focusNodeAfterMounting } from "../../../utils/utils";
import { StyledPartialInputWrapper } from "./styled";
import { useSubmit } from "../../use-submit";
import { TestContext } from "../../Context";

interface IPartialInput {
    id: number,
    textBefore: string,
    textAfter: string,
    defaultValue: string,
    correctAnswer: string
}

const PartialTextInput = () => {
    const { data } = useContext(TestContext)!;
    const { config } = get(data, 'getTests[0]');
    const [answerToSubmit, setAnswerToSubmit] = useState<string>('');
    const { submittedResult, submitAnswer } = useSubmit();

    useEffect(() => {
        setAnswerToSubmit('');
    }, [submittedResult])

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