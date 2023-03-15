import { ForwardedRef, RefObject, useState } from "react";
import { trim } from "lodash";
import { ISubmitAnswer } from "../types";

const useSubmit = (): ISubmitAnswer => {
    const [submittedResult, setSubmittedResult] = useState({});

    const submitAnswer = (key: string, index: number, correctAnswer: string, answer: string, textInputRefs?: ForwardedRef<RefObject<HTMLInputElement>[]>) => {
        const submitGate = () => trim(answer.toLowerCase()) === trim(correctAnswer.toLowerCase());
        if (key === 'Enter') {
            setSubmittedResult((prevAnswers: { [key: number]: boolean }) => ({
                ...prevAnswers,
                [index]: submitGate()
            }));
            //@ts-ignore
            submitGate() && textInputRefs.current[index + 1]?.focus();
        }
    }

    return { submittedResult, submitAnswer }
}

export { useSubmit };