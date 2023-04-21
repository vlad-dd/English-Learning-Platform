import { gql } from "@apollo/client";

export const ADD_COMMENT = gql`
  mutation addCommentToCommentSection($collection: String!, $id: String!, $comment: String!, $email: String!) {
    addComment(collection: $collection, id: $id, comment: $comment, email: $email)
  }
`;