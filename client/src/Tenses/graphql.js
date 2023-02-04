import { gql } from '@apollo/client';

export const GET_TENSE = gql`
query getAllTenseConfiguration($tense: String!) {
    countOfTenses(tense: $tense) {
    cases {
      icon
      key
      label
      titles {
        description
      }
    }
    # examples {
    #   header
    #   icon
    #   key
    #   sentences {
    #     id
    #     sentence
    #   }
    # }
    # practice {
    #   sentences {
    #     id
    #     label
    #     partOne
    #     missed
    #     partTwo
    #   }
    # }
    tableData {
      table {
        auxiliar
        auxiliar_1
        key
        noun
        type
        noun_1
      }
      tip
    }
    tense
  }
}
`;