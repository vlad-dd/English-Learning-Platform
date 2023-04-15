import { MockedProvider } from "@apollo/client/testing";
import { renderHook, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { useGrammarConfigWidget } from ".";
import store from "../../store";
import { GET_GRAMMAR_BY_LEVEL_AND_THEME } from "../graphql";

const dataMock = {
  grammarByLevel: [
    {
      quiz: {
        quizSynopsis: 'The quiz is comprised of questions that pertain to Plural Demonstrative Objective and is intended to assess your grammar proficiency. Following the quiz, you will be provided with a score and an evaluation of your performance.',
        questions: [{ question: 'Question text' }]
      },
      tip: 'A plural demonstrative adjective is a word that is used to describe more than one person or thing.',
      content: `<main> <section>     <h2>Introduction</h2>     <p>Plural demonstrative adjectives are words used to indicate or point to multiple people, objects, or things. The three most common plural demonstrative adjectives in English are "those," "them," and "these." These adjectives are important because they help clarify which specific items or objects are being referred to in a sentence.</p> </section> <section>     <h2>Form and Usage</h2>     <p>Here are the forms and uses of the three most common plural demonstrative adjectives:</p>     <ul>         <li><strong>Those:</strong> Used to refer to objects or people that are far away in distance or time. Example: "Those books on the shelf are mine."</li>         <li><strong>Them:</strong> Used to refer to objects or people that are not close to the speaker or the listener. Example: "Did you see them at the party last night?"</li>         <li><strong>These:</strong> Used to refer to objects or people that are close to the speaker or the listener. Example: "These cookies are delicious."</li>     </ul>     <p>Plural demonstrative adjectives can be used with or without a noun. When used without a noun, they function as pronouns. Example: "I like these, but those are better."</p> </section> <section>     <h2>Conclusion</h2>     <p>Plural demonstrative adjectives are essential in English because they help clarify which specific items or objects are being referred to in a sentence. By using "those," "them," and "these," English speakers can indicate distance, proximity, and relevance to the speaker or listener. It's important to use these adjectives correctly to avoid confusion and effectively communicate ideas.</p> </section> </main>`,
      title: 'Plural',
      explanation: 'Plural Demonstrative Objective'
    }
  ]
}


jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: () => ({ path: ['mock theme', 'mock level'] })
}))

const mocks = [
  {
    request: {
      query: GET_GRAMMAR_BY_LEVEL_AND_THEME,
      variables: {
        level: "mock level",
        theme: 'mock theme'
      },
    },
    result: {
      data: dataMock,
      isLoading: false,
      error: undefined
    },
  },
];

const ApplicationProviders = ({ children }: { children: JSX.Element }) => {
  return (
    <MockedProvider mocks={mocks}>
      <Provider store={store}>
        {children}
      </Provider>
    </MockedProvider>
  )
}

describe('useGrammarConfigWidget', () => {
  it('should return config', async () => {
    const { result } = renderHook(() => useGrammarConfigWidget(), { wrapper: ApplicationProviders });
    await waitFor(() => {
      expect(result.current.data.grammarByLevel[0].content).toBe(dataMock.grammarByLevel[0].content);
      expect(result.current.data.grammarByLevel[0].tip).toBe(dataMock.grammarByLevel[0].tip);
      expect(result.current.data.grammarByLevel[0].title).toBe(dataMock.grammarByLevel[0].title);
      expect(result.current.data.grammarByLevel[0].explanation).toBe(dataMock.grammarByLevel[0].explanation);
      expect(result.current.data.grammarByLevel[0].quiz.quizSynopsis).toBe(dataMock.grammarByLevel[0].quiz.quizSynopsis);
      expect(result.current.data.grammarByLevel[0].quiz.questions.length).toBe(dataMock.grammarByLevel[0].quiz.questions.length);
      expect(result.current.data.grammarByLevel[0].quiz.questions[0].question).toBe(dataMock.grammarByLevel[0].quiz.questions[0].question);
    });
  });
});