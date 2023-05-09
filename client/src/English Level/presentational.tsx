import { useMemo, useState } from 'react';
import Quiz from 'react-quiz-component';
import { Steps } from 'antd';
import { size } from 'lodash';
import { ENGLISH_LEVEL_QUIZ } from './constants';
import { StyledEnglishLevelRootWrapper, StyledSteps, StyledTitle } from "./styled";
import { ISubmittedAnswers } from './types';

const EnglishLevelRoot = () => {
    const [stepIndex, setStepIndex] = useState(0);
    const [submittedAnswers, setSubmittedAnswer] = useState<ISubmittedAnswers[]>([])

    const submitCurrentAnswer = (submittedAnswer: any) => {
        const { userAnswer, question: { correctAnswer } } = submittedAnswer;
        setSubmittedAnswer((prev: any) => ([
            ...prev,
            { title: JSON.stringify(stepIndex), [stepIndex]: userAnswer === parseInt(correctAnswer) }
        ]));
        setStepIndex((prev: number) => prev + 1)
    }

    const progressSteps = useMemo(() => new Array(size(ENGLISH_LEVEL_QUIZ.questions)).fill(0).map((_, i) => {
        //@ts-ignore
        return <Steps.Step status={submittedAnswers[i]?.[i] === false && "error"}>{i}</Steps.Step>
    }), [stepIndex])

    return (
        <>
            <StyledTitle className="elp-title">English Proficiency Level Test</StyledTitle>
            <StyledEnglishLevelRootWrapper>
                <div>
                    <Quiz quiz={ENGLISH_LEVEL_QUIZ} onQuestionSubmit={submitCurrentAnswer} />
                </div>
                <StyledSteps
                    current={stepIndex}
                    direction='vertical'
                    responsive
                >
                    {progressSteps}
                </StyledSteps>
            </StyledEnglishLevelRootWrapper>
        </>
    )
}

export default EnglishLevelRoot;