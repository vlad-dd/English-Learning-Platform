import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Steps } from "antd";
import { get, size } from "lodash";
import { GET_ENGLISH_LEVEL_TEST } from "../graphql";
import { IPreviousAnswer, ISubmittedAnswer, ISubmittedAnswers } from "../types";
import { ENGLISH_LEVEL_QUIZ } from "../constants";

const { Step } = Steps;

const useEnglishLevelWidget = () => {
    const [stepIndex, setStepIndex] = useState<number>(0);
    const [submittedAnswers, setSubmittedAnswer] = useState<ISubmittedAnswers[]>([])
    const { data, loading, error } = useQuery(GET_ENGLISH_LEVEL_TEST);
    const questions = get(data, 'getEnglishLevelTest')

    const submitCurrentAnswer = (submittedAnswer: ISubmittedAnswer) => {
        const { userAnswer, question: { correctAnswer } } = submittedAnswer;
        setSubmittedAnswer((prev: IPreviousAnswer[]) => ([
            ...prev,
            { title: JSON.stringify(stepIndex), [stepIndex]: userAnswer === parseInt(correctAnswer) }
        ]));
        setStepIndex((prev: number) => prev + 1)
    }

    const progressSteps = !!size(questions) && new Array(size(questions)).fill(0).map((_, i) => {
        //@ts-ignore
        return <Step status={submittedAnswers[i]?.[i] === false && "error"}>{i}</Step>
    })

    return {
        stepIndex,
        submitCurrentAnswer,
        progressSteps,
        quiz: { ...ENGLISH_LEVEL_QUIZ, questions },
        isLoading: loading,
        error
    }
}

export default useEnglishLevelWidget;