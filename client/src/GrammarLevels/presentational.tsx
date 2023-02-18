import React from "react";
import { Alert, Divider } from "antd";
//@ts-ignore
import Quiz from 'react-quiz-component';
import { AlertOutlined } from "@ant-design/icons";
import { ContentSection } from "../Tenses/styled";
import { BreadcrumbPath, CasesTabs, Title } from "../Сommon";
import { useGrammarConfig } from "./use-grammar-config/useGrammarConfig";
import { GrammarLevelDescription } from "./styles";

const renderExample = ({ title, tip, content, explanation, cases, quiz }: any) => {
    const quizConfiguration = { ...quiz, questions: [...quiz.questions] };
    return (
        <>
            <Title styles={{ fontSize: "2.5rem" }}>{title}</Title>
            <Alert icon={<AlertOutlined />} message={tip} showIcon />
            <Title styles={{ paddingTop: '25px' }}>Explanation Of Plural Demonstrative Objective</Title>
            <GrammarLevelDescription dangerouslySetInnerHTML={{__html: content}} style={{ fontSize: "1rem", fontFamily: 'inherit', paddingTop: "15px", paddingBottom: "15px" }}>
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
            <ContentSection>
                {data && !isLoading && !error && data.grammarByLevel.map(renderExample)}
                {isLoading && <div>Loading...</div>}
                {error && <div>We have some troubles with request...</div>}
            </ContentSection>
        </React.Fragment>
    )
}

export default GrammarLevels;