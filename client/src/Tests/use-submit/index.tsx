import { useState } from "react";
import { trim } from "lodash";
import { ISubmitAnswer } from "../types";

const useSubmit = (): ISubmitAnswer => {
    const [submittedResult, setSubmittedResult] = useState();
    console.log()

    const submitAnswer = (key: string, index: number, correctAnswer: string, answer: any, textInputRefs?: any) => {
        const submitGate = () => trim(answer.toLowerCase()) === trim(correctAnswer.toLowerCase());
        if (key === 'Enter') {
            setSubmittedResult((prevAnswers: any) => ({
                ...prevAnswers,
                [index]: submitGate()
            }));
            submitGate() && textInputRefs.current[index + 1]?.focus();
        }
    }

    return { submittedResult, submitAnswer }
}

export { useSubmit };