import { gql } from "@apollo/client";

export const GET_ENGLISH_LEVEL_TEST = gql`
  query getEnglishLevelTest{
    getEnglishLevelTest {
      questions {
        question
        questionType
        point
        messageForIncorrectAnswer
        messageForCorrectAnswer
        explanation
        correctAnswer
        answers
      }
    }
  }
`;
