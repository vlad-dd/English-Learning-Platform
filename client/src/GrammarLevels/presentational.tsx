import React from "react";
import { Alert, Divider } from "antd";
import Quiz from 'react-quiz-component';
import { AlertOutlined } from "@ant-design/icons";
import { ContentSection } from "../Tenses/styled";
import { BreadcrumbPath, CasesTabs, Title } from "../Сommon";
import { useGrammarConfig } from "./use-grammar-config";
import { GrammarLevelDescription } from "./styles";
import { IGrammarLevelItem } from "./types";

const renderGrammarLevelContent = ({ title, tip, content, explanation, cases, quiz }: IGrammarLevelItem) => {
    const quizConfiguration = { ...quiz, questions: [...quiz.questions] };
    return (
        <>
            <Title styles={{ fontSize: "2.5rem" }}>{title}</Title>
            <Alert icon={<AlertOutlined />} message={tip} showIcon />
            <Title styles={{ paddingTop: '25px' }}>Explanation Of {explanation}</Title>
            <GrammarLevelDescription dangerouslySetInnerHTML={{__html: content}} style={{ fontSize: "1rem", fontFamily: 'inherit', paddingTop: "15px", paddingBottom: "15px" }} data-testid="grammar-level-content">
            </GrammarLevelDescription>
            <Title styles={{ paddingTop: '25px' }}>Use Cases For {explanation}</Title>
            <CasesTabs config={cases} />
            <Divider />
            <Title>Consolidation Of Knowledge</Title>
            <Quiz quiz={quizConfiguration} shuffle />
        </>
    );
}

const GrammarLevels = () => {
    const { data, isLoading, error } = useGrammarConfig();
    return (
        <React.Fragment>
            <BreadcrumbPath />
            <ContentSection data-testid="grammar-levels-content-section">
                {data && !isLoading && !error && data.grammarByLevel.map(renderGrammarLevelContent)}
                {isLoading && <div>Loading...</div>}
                {error && <div>We have some troubles with request...</div>}
            </ContentSection>
        </React.Fragment>
    )
}

export default GrammarLevels;
