import { gql } from "@apollo/client";

export const SEND_APPLICATION_REPORT_MUTATION = gql`
  mutation sendApplicationReport($application: String!, $description: String!) {
    reportApplication(report: { application: $application, description: $description })
  }
`;

