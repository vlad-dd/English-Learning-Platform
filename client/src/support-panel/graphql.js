import { gql } from "@apollo/client";

export const GET_REPORTS = gql`
query userReports {
    getApplicationReports {
    reports {
      id
      report {
        application
        description
      }
    }
  }
  getCommentReports{
    reports {
      id
      report {
        comment
      }
    }
    }
    getUserReports {
    reports {
      id
      report {
        reason
        comment
        additionalInformation
      }
    }
  }
  }`