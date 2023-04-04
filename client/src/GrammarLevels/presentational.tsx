import React from "react";
import { Alert, Divider } from "antd";
import Quiz from 'react-quiz-component';
import { AlertOutlined } from "@ant-design/icons";
import { ContentSection } from "../Tenses/styled";
import { BreadcrumbPath, CasesTabs, SectionComments, Title } from "../Сommon";
import { useGrammarConfig } from "./use-grammar-config";
import { GrammarLevelDescription, QuizWrapper } from "./styles";
import { IGrammarLevelItem } from "./types"; //remove after clean up
import { compact, get } from "lodash";


const GrammarLevels = () => {
    const { data, isLoading, error, refetch } = useGrammarConfig();
    const config = get(data, 'grammarByLevel[0]');
    const quiz = get(data, 'grammarByLevel[0].quiz');
    console.log('config: ', config)
    const conditionGate = () => !!data && !isLoading && !error;
    const path = compact(window.location.pathname.split('/'));

    return (
        <React.Fragment>
            <BreadcrumbPath />
            <ContentSection data-testid="grammar-levels-content-section">
                {conditionGate() && (
                    <>
                        <Title styles={{ fontSize: "2.5rem" }}>{config.title}</Title>
                        <Alert icon={<AlertOutlined />} message={config.tip} showIcon />
                        <Title styles={{ paddingTop: '25px' }}>Explanation Of {config.explanation}</Title>
                        <GrammarLevelDescription dangerouslySetInnerHTML={{ __html: config.content }} style={{ fontSize: "1rem", fontFamily: 'inherit', paddingTop: "15px", paddingBottom: "15px" }} data-testid="grammar-level-content">
                        </GrammarLevelDescription>
                        <Title styles={{ paddingTop: '25px' }}>Use Cases For {config.explanation}</Title>
                        <CasesTabs config={config.cases} />
                        <Divider />
                        <QuizWrapper>
                            <Title>Consolidation Of Knowledge</Title>
                            <Quiz quiz={{ ...quiz, questions: [...quiz.questions] }} shuffle />
                            <SectionComments renderComments={config.comments} refetch={refetch} path1={path[1]} path2={path[2]} />
                        </QuizWrapper>
                    </>
                )}
                {isLoading && <div>Loading...</div>}
                {error && <div>We have some troubles with request...</div>}
            </ContentSection>
        </React.Fragment>
    )
}

export default GrammarLevels;
