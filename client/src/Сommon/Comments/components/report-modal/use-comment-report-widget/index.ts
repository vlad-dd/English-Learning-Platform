import { useMutation } from "@apollo/client";
import { SEND_REPORT } from "../graphql";

const useCommentReportWidget = (commentID: string) => {
    const [createReport, { loading, error }] = useMutation(SEND_REPORT);

    const createUserAppeal = async (selectedReason: string, additionalInformation: string) => {
        await createReport({ variables: { commentID, selectedReason, additionalInformation } });
    }

    return {
        createUserAppeal,
        isLoading: loading,
        error
    }
}

export default useCommentReportWidget;