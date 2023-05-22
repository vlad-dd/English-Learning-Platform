import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Steps } from "antd";
import { size } from "lodash";
import { GET_ENGLISH_LEVEL_TEST } from "../graphql";
import { IPreviousAnswer, ISubmittedAnswer, ISubmittedAnswers } from "../types";
import { ENGLISH_LEVELS, ENGLISH_LEVEL_QUIZ } from "../constants";
import { extractByPath } from "../../utils/utils";

const { Step } = Steps;

export const useEnglishLevelWidget = () => {
    const [stepIndex, setStepIndex] = useState<number>(0);
    const [submittedAnswers, setSubmittedAnswer] = useState<ISubmittedAnswers[]>([])
    const [classifiedLevel, setClassifiedLevel] = useState<string>();
    const { data, loading, error } = useQuery(GET_ENGLISH_LEVEL_TEST);
    const questions = extractByPath(data, 'getEnglishLevelTest');

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

    const generateLevelFeedback = (correctPoints: number) => {
        const { label }: any = ENGLISH_LEVELS.find((level) => correctPoints >= level.min && correctPoints <= level.max);
        setClassifiedLevel(label);
    }

    return {
        stepIndex,
        submitCurrentAnswer,
        progressSteps,
        generateLevelFeedback,
        classifiedLevel,
        quiz: { ...ENGLISH_LEVEL_QUIZ, questions },
        isLoading: loading,
        error
    }
}