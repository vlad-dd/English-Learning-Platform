import { gql } from "@apollo/client";

export const SEND_REPORT = gql`
  mutation reportComment($commentID: ID!, $selectedReason: String!, $additionalInformation: String) {
    reportComment(report: { comment: $commentID, reason: $selectedReason, additionalInformation: $additionalInformation })
  }
`