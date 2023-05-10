import Quiz from 'react-quiz-component';
import { size } from 'lodash';
import useEnglishLevelWidget from './use-english-level-widget';
import { LoadingProgress } from '../Сommon';
import ErrorPage from '../Сommon/error-handler-page/not-found-url';
import { ELP_USER_EXPERIENCE_ERRORS } from '../Сommon/error-handler-page/constants';
import { StyledEnglishLevelRootWrapper, StyledSteps, StyledTitle } from "./styled";

const EnglishLevelRoot = () => {
    const { quiz, submitCurrentAnswer, stepIndex, progressSteps, isLoading, error } = useEnglishLevelWidget();

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
            <StyledEnglishLevelRootWrapper>
                <div>
                    <Quiz quiz={{ ...quiz, questions: [...quiz.questions] }} onQuestionSubmit={submitCurrentAnswer} />
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