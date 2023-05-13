import Quiz from 'react-quiz-component';
import { isNil, size } from 'lodash';
import { Tag } from 'antd';
import { MdDone } from 'react-icons/md'
import useEnglishLevelWidget from './use-english-level-widget';
import { LoadingProgress } from '../Сommon';
import ErrorPage from '../Сommon/error-handler-page/not-found-url';
import { ELP_USER_EXPERIENCE_ERRORS } from '../Сommon/error-handler-page/constants';
import { StyledEnglishLevelRootWrapper, StyledSteps, StyledTitle } from "./styled";

const EnglishLevelRoot = () => {
    const {
        quiz,
        submitCurrentAnswer,
        generateLevelFeedback,
        classifiedLevel,
        stepIndex,
        progressSteps,
        isLoading,
        error
    } = useEnglishLevelWidget();

    if (isLoading || !size(quiz.questions)) {
        return <LoadingProgress />
    }

    if (!window.navigator.onLine) {
        return <ErrorPage error={ELP_USER_EXPERIENCE_ERRORS.BAD_CONNECTION} />
    }

    if (error) {
        if (error.networkError) {
            return <ErrorPage error={ELP_USER_EXPERIENCE_ERRORS.SERVER_ERROR} />
        } else {
            return <ErrorPage error={ELP_USER_EXPERIENCE_ERRORS.UNEXPECTED_BREAK} />
        }
    }

    return (
        <>
            <StyledTitle className="elp-title">English Proficiency Level Test</StyledTitle>
            {!isNil(classifiedLevel) && (
                <div style={{ paddingLeft: "25px", display: 'inline-block' }}>
                    <Tag style={{ display: "flex", alignItems: "center", fontSize: "1rem" }}color='purple'>
                       <span style={{ marginRight: "5px", color: "gainsboro" }}>Your english level is {classifiedLevel}</span>
                        <MdDone fill='green' size={20} />
                    </Tag>
                </div>
            )}
            <StyledEnglishLevelRootWrapper>
                <div>
                    <Quiz
                        shuffle
                        quiz={{ ...quiz, questions: [...quiz.questions] }}
                        onQuestionSubmit={submitCurrentAnswer}
                        onComplete={({ numberOfCorrectAnswers }: { numberOfCorrectAnswers: number }) => generateLevelFeedback(numberOfCorrectAnswers)}
                    />
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