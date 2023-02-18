import { gql } from "@apollo/client";

export const GET_GRAMMAR_BY_LEVEL_AND_THEME = gql`
  query getGrammarByLevelAndTheme($level: String!, $theme: String!) {
    grammarByLevel(level: $level, theme: $theme) {
        title
        tip
        explanation
        content
        cases {
          key
          icon
          label
          titles {
            description
          }
        }
      quiz {
      quizSynopsis
      questions {
        question
        questionType
        answerSelectionType
        answers
        correctAnswer
        messageForCorrectAnswer
        messageForIncorrectAnswer
        explanation
        point
      }
    }
    }
  }
`;
