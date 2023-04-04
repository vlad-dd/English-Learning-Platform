// import React from "react";
// import { fireEvent, render, screen } from '@testing-library/react';
// import GrammarLevels from "./presentational";
// import * as GrammarConfigHook from "./use-grammar-config";
// import ErrorBoundary from "../ErrorBoundary";
// import { Provider } from "react-redux";
// import store from "../store";
// import { ApolloError } from "@apollo/client";

// const dataMock = {
//     grammarByLevel: [
//         {
//             quiz: {
//                 quizSynopsis: 'The quiz is comprised of questions that pertain to Plural Demonstrative Objective and is intended to assess your grammar proficiency. Following the quiz, you will be provided with a score and an evaluation of your performance.',
//                 questions: [
//                     {
//                         "question": "Which of these objects is closest to you?",
//                         "questionType": "text",
//                         "answerSelectionType": "single",
//                         "answers": [
//                             "this table",
//                             "that table",
//                             "those tables",
//                             "these tables",
//                         ],
//                         "correctAnswer": "4",
//                         "messageForCorrectAnswer": "Correct answer. Good job.",
//                         "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
//                         "explanation": "The correct answer is 'these tables.' 'Tables' is a plural noun. When you are looking at two or more items, that are near, you will always use 'these'.",
//                         "point": "20"
//                     },
//                 ]
//             },
//             tip: 'A plural demonstrative adjective is a word that is used to describe more than one person or thing.',
//             content: `<main> <section>     <h2>Introduction</h2>     <p>Plural demonstrative adjectives are words used to indicate or point to multiple people, objects, or things. The three most common plural demonstrative adjectives in English are "those," "them," and "these." These adjectives are important because they help clarify which specific items or objects are being referred to in a sentence.</p> </section> <section>     <h2>Form and Usage</h2>     <p>Here are the forms and uses of the three most common plural demonstrative adjectives:</p>     <ul>         <li><strong>Those:</strong> Used to refer to objects or people that are far away in distance or time. Example: "Those books on the shelf are mine."</li>         <li><strong>Them:</strong> Used to refer to objects or people that are not close to the speaker or the listener. Example: "Did you see them at the party last night?"</li>         <li><strong>These:</strong> Used to refer to objects or people that are close to the speaker or the listener. Example: "These cookies are delicious."</li>     </ul>     <p>Plural demonstrative adjectives can be used with or without a noun. When used without a noun, they function as pronouns. Example: "I like these, but those are better."</p> </section> <section>     <h2>Conclusion</h2>     <p>Plural demonstrative adjectives are essential in English because they help clarify which specific items or objects are being referred to in a sentence. By using "those," "them," and "these," English speakers can indicate distance, proximity, and relevance to the speaker or listener. It's important to use these adjectives correctly to avoid confusion and effectively communicate ideas.</p> </section> </main>`,
//             title: 'Plural',
//             explanation: 'Plural Demonstrative Objective',
//             cases: [{
//                 icon: "icon.png",
//                 key: "1",
//                 label: "Cases Tab Mock",
//                 titles: [{
//                     description: 'Cases Tab Mocked Description'
//                 }]
//             }]
//         }
//     ]
// }

// jest.mock('./use-grammar-config', () => ({
//     useGrammarConfig: jest.fn()
// }));


// const ApplicationProviders = ({ children }: { children: JSX.Element }) => {
//     return (
//         <Provider store={store}>
//             <ErrorBoundary>
//                 {children}
//             </ErrorBoundary>
//         </Provider>
//     )
// };

// describe('GrammarLevels', () => {
//     const grammarConfigSpy = jest.spyOn(GrammarConfigHook, 'useGrammarConfig');

//     describe('when data is defined', () => {

//         beforeEach(() => {
//             grammarConfigSpy.mockReturnValue({ data: dataMock, isLoading: false, error: undefined })
//             render(<ApplicationProviders><GrammarLevels /></ApplicationProviders>);
//         });

//         it('should render GrammarLevels root', () => {
//             expect(screen.getByTestId("grammar-levels-content-section")).toBeInTheDocument();
//         });
    
//         it('should render titles', () => {
//             const titles = ['Plural', 'Explanation Of Plural Demonstrative Objective', 'Use Cases For Plural Demonstrative Objective', 'Consolidation Of Knowledge']
//             expect(screen.queryAllByTestId("title-component-id").length).toBe(4);
//             titles.forEach((title: string) => expect(screen.getByText(title)).toBeInTheDocument());
//         });

//         it('should render alert message', () => {
//             expect(screen.getByText('A plural demonstrative adjective is a word that is used to describe more than one person or thing.')).toBeInTheDocument();
//         });

//         it('should render grammar level content', () => {
//             const introductionContent = `Plural demonstrative adjectives are words used to indicate or point to multiple people, objects, or things. The three most common plural demonstrative adjectives in English are "those," "them," and "these." These adjectives are important because they help clarify which specific items or objects are being referred to in a sentence.`;
//             const formAndUsage = `Plural demonstrative adjectives can be used with or without a noun. When used without a noun, they function as pronouns. Example: "I like these, but those are better."`;
//             const conclusion = `Plural demonstrative adjectives are essential in English because they help clarify which specific items or objects are being referred to in a sentence. By using "those," "them," and "these," English speakers can indicate distance, proximity, and relevance to the speaker or listener. It's important to use these adjectives correctly to avoid confusion and effectively communicate ideas.`;
//             const grammarLevelContent = ['Introduction', introductionContent, 'Form and Usage', formAndUsage, 'Conclusion', conclusion]
//             expect(screen.getByTestId("grammar-level-content")).toBeInTheDocument();
//             grammarLevelContent.forEach((content: string) => expect(screen.getByText(content)).toBeInTheDocument());
//         });

//         it('should render cases', () => {
//             expect(screen.getByTestId("cases-tabs-id")).toBeInTheDocument();
//             expect(screen.getByTestId("cases-tabs-icon")).toBeInTheDocument();
//             expect(screen.getByText('Cases Tab Mock')).toBeInTheDocument();
//             expect(screen.getByText('Cases Tab Mocked Description')).toBeInTheDocument();
//             expect(screen.getByTestId("cases-tabs-icon").getAttribute('src')).toBe('icon.png');
//         });

//         it('should render quizes', () => {
//             const quizDescription = `The quiz is comprised of questions that pertain to Plural Demonstrative Objective and is intended to assess your grammar proficiency. Following the quiz, you will be provided with a score and an evaluation of your performance.`;
//             const quizTitles = ['1 Questions', quizDescription, 'Start Quiz']
//             const quizRoot = document.getElementsByClassName("react-quiz-container")[0];
//             expect(quizRoot.getAttribute('class')).toBe('react-quiz-container')
//             quizTitles.forEach((title: string) => expect(screen.getByText(title)).toBeInTheDocument());
//         });

//         it('should start quiz and render questions', () => {
//             const startQuizButton = document.getElementsByClassName('startQuizBtn btn')[0];
//             const questionConfigurationText = [
//                 'Which of these objects is closest to you?', 
//                 'Single Selection', 
//                 'Pick 1', 
//                 'this table',
//                 'that table',
//                 'those tables',
//                 'these tables'
//             ];
//             questionConfigurationText.forEach((text:string) =>  expect(screen.queryByText(text)).not.toBeInTheDocument());
//             fireEvent.click(startQuizButton);
//             questionConfigurationText.forEach((text:string) =>  expect(screen.getByText(text)).toBeInTheDocument());
//         });
//     });

//     describe('should return Loading sign if isLoading is true', () => { 
//         it('should return Loading sign', () => {
//             grammarConfigSpy.mockReturnValue({ data: [], isLoading: true, error: undefined })
//             render(<ApplicationProviders><GrammarLevels /></ApplicationProviders>);
//             expect(screen.getByText('Loading...')).toBeInTheDocument();
//             screen.debug();
//         });
//     })

//     describe('should return error message if error exists', () => { 
//         it('should return Loading sign', () => {
//             grammarConfigSpy.mockReturnValue({ data: [], isLoading: false, error: new ApolloError({}) })
//             render(<ApplicationProviders><GrammarLevels /></ApplicationProviders>);
//             expect(screen.getByText('We have some troubles with request...')).toBeInTheDocument();
//         });
//     });
// })
export {};