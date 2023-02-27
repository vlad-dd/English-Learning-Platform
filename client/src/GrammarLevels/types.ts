interface ICasesTabs {
    __typename: string
    label: string;
    key: string;
    icon: string,
    titles: {  __typename: string, description: string }[];
  }

interface IGrammarLevelItem {
    title: string
    tip: string
    quiz: {
        __typename: string
        quizSynopsis: string
        questions: {
            __typename: string
            questionType: string
            question: string
            point: string
            messageForCorrectAnswer: string
            messageForIncorrectAnswer: string
            explanation: string
            correctAnswer: string
            answers: Array<string>
            answerSelectionType: string
        }[]
    }
    explanation: string
    content: string
    cases: Array<ICasesTabs>

}

export type {
    IGrammarLevelItem
}