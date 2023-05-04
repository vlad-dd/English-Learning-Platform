import { gql } from "@apollo/client";

export const SEND_USER_REPORT_MUTATION = gql`
  mutation sendUserReport($reason: String!, $additionalInformation: String!) {
    reportUser(report: { reason: $reason, additionalInformation: $additionalInformation })
  }
`;
