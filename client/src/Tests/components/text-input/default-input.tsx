import React, { useState, useEffect, useLayoutEffect, forwardRef, ForwardedRef, RefObject } from 'react';
import { Input } from 'antd';
import { isNil } from 'lodash';
import { BORDERS, TEXT_INPUT_ID } from '../constants';
import { focusNodeAfterMounting } from '../../utils';
import { useSubmit } from '../../use-submit';
interface ITextInput {
    index: number
    correctAnswer: string
    textInputRefs: ForwardedRef<RefObject<HTMLInputElement>[]>
}

const DefaultTextInput = forwardRef(({ index, correctAnswer, textInputRefs }: ITextInput, ref: ForwardedRef<any>) => {
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
          ref={ref}
          //@ts-ignore
          style={{  border: !isNil(submittedResult) && BORDERS[submittedResult[index]] }}
          disabled={ !isNil(submittedResult) && submittedResult[index] }
          onKeyDown={({ key }) => submitAnswer(key, index, correctAnswer, answer, textInputRefs)}
          onChange={({ target: { value } }) => setAnswer(value)}
        />
    )
})

DefaultTextInput.displayName = 'DefaultTextInput';

export default DefaultTextInput;