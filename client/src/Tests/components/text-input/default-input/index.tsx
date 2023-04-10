import React, { useState, useEffect, useLayoutEffect, forwardRef, ForwardedRef, RefObject } from 'react';
import { Input } from 'antd';
import { isNil } from 'lodash';
import { BORDERS, TEXT_INPUT_ID } from '../../../constants';
import { useSubmit } from '../../../use-submit';
import { focusNodeAfterMounting } from '../../../../utils/utils';
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

    const isDisabled = (!isNil(submittedResult) && submittedResult[index]) ? true : false;

    return (
        <Input
          id={TEXT_INPUT_ID}
          data-testid={TEXT_INPUT_ID}
          ref={ref}
          style={{ border: !isNil(submittedResult) && BORDERS[submittedResult[index]] }}
          disabled={isDisabled}
          onKeyDown={({ key }) => submitAnswer(key, index, correctAnswer, answer, textInputRefs)}
          onChange={({ target: { value } }) => setAnswer(value)}
        />
    )
})

DefaultTextInput.displayName = 'DefaultTextInput';

export default DefaultTextInput;