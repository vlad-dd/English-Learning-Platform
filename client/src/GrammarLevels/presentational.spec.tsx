import { fireEvent, render, screen } from '@testing-library/react';
import { withApolloProvider, withIntlProvider, withReduxProvider, withRouterProvider } from '../test-utils/hocs';
import { LOADING_PROGRESS_DATA_TEST_ID } from '../Сommon/LoadingProgress/constants';
import { ERROR_PAGE_DATA_TEST_ID } from '../Сommon/error-handler-page/constants';
import { TITLE_COMPONENT_DATA_TEST_ID } from '../Сommon/Title/constants';
import { CASES_TABS_DATA_TEST_ID, CASES_TABS_ICON_DATA_TEST_ID } from '../Сommon/cases-tabs/constants';
import { buildApolloError } from '../test-utils';
import * as GrammarConfigHook from "./use-grammar-config";
import GrammarLevels from "./presentational";
import {
    GRAMMAR_LEVELS_CONTENT_SECTION_DATA_TEST_ID,
    GRAMMAR_LEVEL_DESCRIPTION_DATA_TEST_ID
} from './constants';

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useParams: () => ({ level: 'level', theme: 'theme' })
}))

jest.mock('./use-grammar-config', () => ({
    useGrammarConfigWidget: jest.fn()
}));

const dataMock = {
    grammarByLevel: [
        {
            quiz: {
                quizSynopsis: 'The quiz is comprised of questions that pertain to Plural Demonstrative Objective and is intended to assess your grammar proficiency. Following the quiz, you will be provided with a score and an evaluation of your performance.',
                questions: [
                    {
                        "question": "Which of these objects is closest to you?",
                        "questionType": "text",
                        "answerSelectionType": "single",
                        "answers": [
                            "this table",
                            "that table",
                            "those tables",
                            "these tables",
                        ],
                        "correctAnswer": "4",
                        "messageForCorrectAnswer": "Correct answer. Good job.",
                        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
                        "explanation": "The correct answer is 'these tables.' 'Tables' is a plural noun. When you are looking at two or more items, that are near, you will always use 'these'.",
                        "point": "20"
                    },
                ]
            },
            tip: 'A plural demonstrative adjective is a word that is used to describe more than one person or thing.',
            content: `<main> <section>     <h2>Introduction</h2>     <p>Plural demonstrative adjectives are words used to indicate or point to multiple people, objects, or things. The three most common plural demonstrative adjectives in English are "those," "them," and "these." These adjectives are important because they help clarify which specific items or objects are being referred to in a sentence.</p> </section> <section>     <h2>Form and Usage</h2>     <p>Here are the forms and uses of the three most common plural demonstrative adjectives:</p>     <ul>         <li><strong>Those:</strong> Used to refer to objects or people that are far away in distance or time. Example: "Those books on the shelf are mine."</li>         <li><strong>Them:</strong> Used to refer to objects or people that are not close to the speaker or the listener. Example: "Did you see them at the party last night?"</li>         <li><strong>These:</strong> Used to refer to objects or people that are close to the speaker or the listener. Example: "These cookies are delicious."</li>     </ul>     <p>Plural demonstrative adjectives can be used with or without a noun. When used without a noun, they function as pronouns. Example: "I like these, but those are better."</p> </section> <section>     <h2>Conclusion</h2>     <p>Plural demonstrative adjectives are essential in English because they help clarify which specific items or objects are being referred to in a sentence. By using "those," "them," and "these," English speakers can indicate distance, proximity, and relevance to the speaker or listener. It's important to use these adjectives correctly to avoid confusion and effectively communicate ideas.</p> </section> </main>`,
            title: 'Plural',
            explanation: 'Plural Demonstrative Objective',
            cases: [{
                icon: "icon.png",
                key: "1",
                label: "Cases Tab Mock",
                titles: [{
                    description: 'Cases Tab Mocked Description'
                }]
            }]
        }
    ]
}
const GrammarLevelsWithProvider = withRouterProvider(withApolloProvider(withReduxProvider(withIntlProvider(GrammarLevels))));

describe('GrammarLevels', () => {
    const grammarConfigSpy = jest.spyOn(GrammarConfigHook, 'useGrammarConfigWidget');
    const refetch = jest.fn();

    describe('when data is defined', () => {

        beforeEach(() => {
            grammarConfigSpy.mockReturnValue({ data: dataMock, isLoading: false, error: undefined, refetch })
            render(<GrammarLevelsWithProvider />);
        });

        it('should render GrammarLevels root', () => {
            expect(screen.getByTestId(GRAMMAR_LEVELS_CONTENT_SECTION_DATA_TEST_ID)).toBeInTheDocument();
        });

        it('should render titles', () => {
            const titles = ['Plural', 'Explanation Of Plural Demonstrative Objective', 'Use Cases For Plural Demonstrative Objective', 'Consolidation Of Knowledge']
            expect(screen.queryAllByTestId(TITLE_COMPONENT_DATA_TEST_ID).length).toBe(5);
            titles.forEach((title: string) => expect(screen.getByText(title)).toBeInTheDocument());
        });

        it('should render alert message', () => {
            expect(screen.getByText('A plural demonstrative adjective is a word that is used to describe more than one person or thing.')).toBeInTheDocument();
        });

        it('should render grammar level content', () => {
            const introductionContent = `Plural demonstrative adjectives are words used to indicate or point to multiple people, objects, or things. The three most common plural demonstrative adjectives in English are "those," "them," and "these." These adjectives are important because they help clarify which specific items or objects are being referred to in a sentence.`;
            const formAndUsage = `Plural demonstrative adjectives can be used with or without a noun. When used without a noun, they function as pronouns. Example: "I like these, but those are better."`;
            const conclusion = `Plural demonstrative adjectives are essential in English because they help clarify which specific items or objects are being referred to in a sentence. By using "those," "them," and "these," English speakers can indicate distance, proximity, and relevance to the speaker or listener. It's important to use these adjectives correctly to avoid confusion and effectively communicate ideas.`;
            const grammarLevelContent = ['Introduction', introductionContent, 'Form and Usage', formAndUsage, 'Conclusion', conclusion]
            expect(screen.getByTestId(GRAMMAR_LEVEL_DESCRIPTION_DATA_TEST_ID)).toBeInTheDocument();
            grammarLevelContent.forEach((content: string) => expect(screen.getByText(content)).toBeInTheDocument());
        });

        it('should render cases', () => {
            expect(screen.getByTestId(CASES_TABS_DATA_TEST_ID)).toBeInTheDocument();
            expect(screen.getByTestId(CASES_TABS_ICON_DATA_TEST_ID)).toBeInTheDocument();
            expect(screen.getByText('Cases Tab Mock')).toBeInTheDocument();
            expect(screen.getByText('Cases Tab Mocked Description')).toBeInTheDocument();
            expect(screen.getByTestId(CASES_TABS_ICON_DATA_TEST_ID).getAttribute('src')).toBe('icon.png');
        });

        it('should render quizes', () => {
            const quizDescription = `The quiz is comprised of questions that pertain to Plural Demonstrative Objective and is intended to assess your grammar proficiency. Following the quiz, you will be provided with a score and an evaluation of your performance.`;
            const quizTitles = ['1 Questions', quizDescription, 'Start Quiz']
            const quizRoot = document.getElementsByClassName("react-quiz-container")[0];
            expect(quizRoot.getAttribute('class')).toBe('react-quiz-container')
            quizTitles.forEach((title: string) => expect(screen.getByText(title)).toBeInTheDocument());
        });

        it('should start quiz and render questions', () => {
            const startQuizButton = document.getElementsByClassName('startQuizBtn btn')[0];
            const questionConfigurationText = [
                'Which of these objects is closest to you?',
                'Single Selection',
                'Pick 1',
                'this table',
                'that table',
                'those tables',
                'these tables'
            ];
            questionConfigurationText.forEach((text: string) => expect(screen.queryByText(text)).not.toBeInTheDocument());
            fireEvent.click(startQuizButton);
            questionConfigurationText.forEach((text: string) => expect(screen.getByText(text)).toBeInTheDocument());
        });
    });

    describe('should return Loading sign if isLoading is true', () => {
        it('should return Loading sign', () => {
            grammarConfigSpy.mockReturnValue({ data: [], isLoading: true, error: undefined, refetch })
            render(<GrammarLevelsWithProvider />);
            expect(screen.getByTestId(LOADING_PROGRESS_DATA_TEST_ID)).toBeInTheDocument();
        });
    })

    describe('should return error message if error exists', () => {
        it('should return error page', () => {
            grammarConfigSpy.mockReturnValue({ data: [{}], isLoading: false, error: buildApolloError(), refetch })
            render(<GrammarLevelsWithProvider />);
            expect(screen.getByTestId(ERROR_PAGE_DATA_TEST_ID)).toBeInTheDocument();
        });
    });
});
