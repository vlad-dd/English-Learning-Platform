import { gql } from "@apollo/client";

export const GET_TEST_CONFIGURATION = gql`
query getTestConfiguration($part: String!, $theme: String!) {
    getTests(part: $part, theme: $theme) {
      __typename
       type
       config {
        label
        correctAnswer
       }
    }
}
`