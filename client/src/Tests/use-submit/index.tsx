import React, { useState } from "react";
import { trim } from "lodash";

const useSubmit = () => {
    const [submittedResult, setSubmittedResult] = useState<any>();

    const submitAnswer = (key: any, index: any, correctAnswer: any, answer: any) => {
        if (key === 'Enter') setSubmittedResult((prevAnswers: any) => ({
            ...prevAnswers,
            [index]: trim(answer.toLowerCase()) === trim(correctAnswer.toLowerCase())
        }));
    }

    return { submittedResult, submitAnswer }
}

export { useSubmit };