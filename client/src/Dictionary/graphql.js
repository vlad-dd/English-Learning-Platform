import { gql } from "@apollo/client";

export const GET_WORD_FROM_DICTIONARY = gql`
  query getWordFromDictionary($word: String!) {
    dictionary(word: $word) {
      word
      phonetic
      phonetics {
        audio
        license {
          name
          url
        }
        sourceUrl
        text
      }
      license {
        name
        url
      }
      meanings {
        antonyms
        definitions {
          example
          definition
          antonyms
          synonyms
        }
        partOfSpeech
        synonyms
      }
      sourceUrls
    }
  }
`;
