import { gql } from "@apollo/client";

export const GET_RELEASES_TIMELINE = gql`
  query getReleasesTimeLine {
    releases {
     id
     date
     version
     isLastUpdate
     title
     description
  }
}
`;
