import React from "react";
import { FormattedMessage } from "react-intl";
import { Alert, Divider } from "antd";
import Quiz from 'react-quiz-component';
import { useParams } from "react-router";
import { AlertOutlined } from "@ant-design/icons";
import { size } from "lodash";
import ErrorPage from "../Сommon/error-handler-page/not-found-url";
import { ELP_USER_EXPERIENCE_ERRORS } from "../Сommon/error-handler-page/constants";
import { BreadcrumbPath, CasesTabs, LoadingProgress, SectionComments, Title } from "../Сommon";
import { extractByPath } from "../utils/utils";
import { GRAMMAR_LEVELS } from "../translations/constants";
import { ContentSection } from "../Tenses/styled";
import { useGrammarConfigWidget } from "./use-grammar-config";
import { GRAMMAR_LEVELS_CONTENT_SECTION_DATA_TEST_ID, GRAMMAR_LEVEL_DESCRIPTION_DATA_TEST_ID } from "./constants";
import { GrammarLevelDescription, QuizWrapper } from "./styles";

const GrammarLevels = () => {
    const { level, theme } = useParams();
    const { data, isLoading, error, refetch } = useGrammarConfigWidget();

    if (!size(data) || !theme || isLoading) {
        return <LoadingProgress />;
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

    const { title, tip, explanation, content, cases, comments, quiz } = extractByPath(data, 'grammarByLevel[0]');

    return (
        <React.Fragment>
            <BreadcrumbPath />
            <ContentSection data-testid={GRAMMAR_LEVELS_CONTENT_SECTION_DATA_TEST_ID}>
                <Title styles={{ fontSize: "2.5rem" }}>{title}</Title>
                <Alert icon={<AlertOutlined />} message={tip} showIcon />
                <Title styles={{ paddingTop: '25px' }}>
                    <FormattedMessage id={GRAMMAR_LEVELS.EXPLANATION} /> {explanation}
                </Title>
                <GrammarLevelDescription
                    data-testid={GRAMMAR_LEVEL_DESCRIPTION_DATA_TEST_ID}
                    dangerouslySetInnerHTML={{ __html: content }}
                />
                <Title styles={{ paddingTop: '25px' }}>
                    <FormattedMessage id={GRAMMAR_LEVELS.USE_CASES} /> {explanation}
                </Title>
                <CasesTabs config={cases} />
                <Divider />
                <QuizWrapper>
                    <Title>
                        <FormattedMessage id={GRAMMAR_LEVELS.CONSOLIDATION_OF_KNOWLEDGE} />
                    </Title>
                    <Quiz quiz={{ ...quiz, questions: [...quiz.questions] }} shuffle />
                </QuizWrapper>
                <SectionComments renderComments={comments} refetch={refetch} collection={level!} document={theme!} />
            </ContentSection>
        </React.Fragment>
    )
}

export default GrammarLevels;
