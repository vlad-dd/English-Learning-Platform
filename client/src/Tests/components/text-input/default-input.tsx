import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Input } from 'antd';
import { size, trim } from 'lodash';
import { BORDERS, TEXT_INPUT_ID } from '../constants';
import { focusNodeAfterMounting } from '../../utils';
import { useSubmit } from '../../use-submit';
interface ITextInput {
    index: number
    correctAnswer: string
}

const DefaultTextInput = ({ index, correctAnswer }: ITextInput) => {
    const [answer, setAnswer] = useState<string>('');
    const { submittedResult, submitAnswer } = useSubmit();

    useEffect(() => {
        setAnswer('');
    }, [submittedResult]);

    useLayoutEffect(() => {
        focusNodeAfterMounting(TEXT_INPUT_ID);
    }, []);

    return (
        <Input
            id={TEXT_INPUT_ID}
            style={{ border: size(submittedResult) ? BORDERS[submittedResult[index]] : null }}
            disabled={ size(submittedResult) && submittedResult[index] }
            onKeyDown={({ key }) => submitAnswer(key, index, correctAnswer, answer)}
            onChange={({ target: { value } }) => setAnswer(value)}
        />
    )
}

export default DefaultTextInput;