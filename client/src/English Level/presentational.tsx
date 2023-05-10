import { useMemo, useState } from 'react';
import Quiz from 'react-quiz-component';
import { Steps } from 'antd';
import { size } from 'lodash';
import { ENGLISH_LEVEL_QUIZ } from './constants';
import { ISubmittedAnswer, ISubmittedAnswers, IPreviousAnswer } from './types';
import { StyledEnglishLevelRootWrapper, StyledSteps, StyledTitle } from "./styled";
import { useQuery } from '@apollo/client';
import { GET_ENGLISH_LEVEL_TEST } from './graphql';

const { Step } = Steps;

const EnglishLevelRoot = () => {
    const [stepIndex, setStepIndex] = useState<number>(0);
    const [submittedAnswers, setSubmittedAnswer] = useState<ISubmittedAnswers[]>([])
    const { data } = useQuery(GET_ENGLISH_LEVEL_TEST);
    console.log('data: ', data)
  
    const submitCurrentAnswer = (submittedAnswer: ISubmittedAnswer) => {
        const { userAnswer, question: { correctAnswer } } = submittedAnswer;
        setSubmittedAnswer((prev: IPreviousAnswer[]) => ([
            ...prev,
            { title: JSON.stringify(stepIndex), [stepIndex]: userAnswer === parseInt(correctAnswer) }
        ]));
        setStepIndex((prev: number) => prev + 1)
    }

    const progressSteps = useMemo(() => new Array(size(ENGLISH_LEVEL_QUIZ.questions)).fill(0).map((_, i) => {
        //@ts-ignore
        return <Step status={submittedAnswers[i]?.[i] === false && "error"}>{i}</Step>
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