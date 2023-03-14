import React, { useEffect, useLayoutEffect, useState } from "react";
import { Input } from 'antd';
import { isNil } from "lodash";
import { BORDERS, PARTIAL_TEXT_INPUT_ID } from "../constants";
import { focusNodeAfterMounting } from "../../utils";
import { StyledPartialInputWrapper } from "./styled";
import { useSubmit } from "../../use-submit";

interface IPartialInput {
    id: number,
    textBefore: string,
    textAfter: string,
    defaultValue: string,
    correctAnswer: string
}

const data = [
    {
        id: 1,
        textBefore: 'She',
        textAfter: "her homework every evening.",
        defaultValue: "(Do)",
        correctAnswer: "Does"
    },
    {
        id: 2,
        textBefore: 'She',
        textAfter: "her homework every evening.",
        defaultValue: "(Do)",
        correctAnswer: "Does"
    },
    {
        id: 3,
        textBefore: 'She',
        textAfter: "her homework every evening.",
        defaultValue: "(Do)",
        correctAnswer: "Does"
    },
    {
        id: 4,
        textBefore: 'She',
        textAfter: "her homework every evening.",
        defaultValue: "(Do)",
        correctAnswer: "Does"
    },
    {
        id: 5,
        textBefore: 'She',
        textAfter: "her homework every evening.",
        defaultValue: "(Do)",
        correctAnswer: "Does"
    },
]

const PartialTextInput = () => {
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
            {data.map(({ id, textBefore, textAfter, defaultValue, correctAnswer }: IPartialInput, index: number) => {
                return (
                    <StyledPartialInputWrapper key={id}>
                        <Input
                            id={PARTIAL_TEXT_INPUT_ID}
                            disabled={ !isNil(submittedResult) && submittedResult[index]}
                            //@ts-ignore
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