import Quiz from 'react-quiz-component';
import { isNil, size } from 'lodash';
import { FormattedMessage } from 'react-intl';
import { MdDone } from 'react-icons/md'
import { useEnglishLevelWidget } from './use-english-level-widget';
import { LoadingProgress } from '../Сommon';
import ErrorPage from '../Сommon/error-handler-page/not-found-url';
import { ELP_USER_EXPERIENCE_ERRORS } from '../Сommon/error-handler-page/constants';
import { ENGLISH_LEVEL_PAGE } from '../translations/constants';
import { CLASSIFIED_LEVEL_CONTAINER_DATA_TEST_ID, ENGLISH_LEVEL_ID, ENGLISH_LEVEL_TITLE_CLASSNAME } from './constants';
import { StyledClassifiedLevelContainer, StyledClassifiedLevelTag, StyledEnglishLevelRootWrapper, StyledLevel, StyledQuizContainer, StyledSteps, StyledTitle } from "./styled";

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
            <StyledTitle className={ENGLISH_LEVEL_TITLE_CLASSNAME}>
                <FormattedMessage id={ENGLISH_LEVEL_PAGE.TITLE} />
            </StyledTitle>
            {!isNil(classifiedLevel) && (
                <StyledClassifiedLevelContainer data-testid={CLASSIFIED_LEVEL_CONTAINER_DATA_TEST_ID}>
                    <StyledClassifiedLevelTag color='purple'>
                        <StyledLevel>
                            <FormattedMessage id={ENGLISH_LEVEL_PAGE.LEVEL} />
                            {"  "}
                            {classifiedLevel}
                        </StyledLevel>
                        <MdDone fill='green' size={20} />
                    </StyledClassifiedLevelTag>
                </StyledClassifiedLevelContainer>
            )}
            <StyledEnglishLevelRootWrapper data-testid={ENGLISH_LEVEL_ID}>
                <StyledQuizContainer>
                    <Quiz
                        shuffle
                        quiz={{ ...quiz, questions: [...quiz.questions] }}
                        onQuestionSubmit={submitCurrentAnswer}
                        onComplete={({ numberOfCorrectAnswers }: { numberOfCorrectAnswers: number }) => generateLevelFeedback(numberOfCorrectAnswers)}
                    />
                </StyledQuizContainer>
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