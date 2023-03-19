import { ForwardedRef, RefObject, useState } from "react";
import { size, trim } from "lodash";
import { ISubmitAnswer } from "../types";

const useSubmit = (): ISubmitAnswer => {
    const [submittedResult, setSubmittedResult] = useState({});

    const submitAnswer = (key: string, index: number, correctAnswer: string, answer: string, textInputRefs?: ForwardedRef<RefObject<HTMLInputElement>[]>) => {
        const submitGate = () => (trim(answer.toLowerCase()) === trim(correctAnswer.toLowerCase())) ? 1 : 0 ;
        if (key === 'Enter') {
            setSubmittedResult((prevAnswers: { [key: number]: boolean }) => ({
                ...prevAnswers,
                [index]: submitGate()
            }));
            //@ts-ignore
            submitGate() && size(textInputRefs) && textInputRefs.current[index + 1]?.focus();
        }
    }

    return { submittedResult, submitAnswer }
}

export { useSubmit };