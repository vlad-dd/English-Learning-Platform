import React from "react";
import { Alert, Divider } from "antd";
import Quiz from 'react-quiz-component';
import { useParams } from "react-router";
import { AlertOutlined } from "@ant-design/icons";
import { get } from "lodash";
import { ContentSection } from "../Tenses/styled";
import { BreadcrumbPath, CasesTabs, LoadingProgress, SectionComments, Title } from "../Сommon";
import { useGrammarConfigWidget } from "./use-grammar-config";
import { GrammarLevelDescription, QuizWrapper } from "./styles";
import ErrorPage from "../Сommon/error-handler-page/not-found-url";
import { ELP_USER_EXPERIENCE_ERRORS } from "../Сommon/error-handler-page/constants";

const GrammarLevels = () => {
    const { level, theme } = useParams();
    const { data, isLoading, error, refetch } = useGrammarConfigWidget();
    const config = get(data, 'grammarByLevel[0]');
    const quiz = get(data, 'grammarByLevel[0].quiz');
    const conditionGate = () => !!data && !isLoading && !error;

    if (!level || !theme) {
        return <LoadingProgress />;
    }

    if (error) {
        if(error.networkError) {
          return <ErrorPage error={ELP_USER_EXPERIENCE_ERRORS.BAD_CONNECTION} />
        } else {
          return <ErrorPage error={ELP_USER_EXPERIENCE_ERRORS.SERVER_ERROR} />
        }   
      }

    return (
        <React.Fragment>
            <BreadcrumbPath />
            <ContentSection data-testid="grammar-levels-content-section">
                {conditionGate() && (
                    <>
                        <Title styles={{ fontSize: "2.5rem" }}>{config.title}</Title>
                        <Alert icon={<AlertOutlined />} message={config.tip} showIcon />
                        <Title styles={{ paddingTop: '25px' }}>Explanation Of {config.explanation}</Title>
                        <GrammarLevelDescription dangerouslySetInnerHTML={{ __html: config.content }} style={{ fontSize: "1rem", fontFamily: 'inherit', paddingTop: "15px", paddingBottom: "15px" }} data-testid="grammar-level-content" />
                        <Title styles={{ paddingTop: '25px' }}>Use Cases For {config.explanation}</Title>
                        <CasesTabs config={config.cases} />
                        <Divider />
                        <QuizWrapper>
                            <Title>Consolidation Of Knowledge</Title>
                            <Quiz quiz={{ ...quiz, questions: [...quiz.questions] }} shuffle />
                        </QuizWrapper>
                        <SectionComments renderComments={config.comments} refetch={refetch} collection={level} document={theme}/>
                    </>
                )}
                {isLoading && <LoadingProgress />}
                {error && <div>We have some troubles with request...</div>}
            </ContentSection>
        </React.Fragment>
    )
}

export default GrammarLevels;
