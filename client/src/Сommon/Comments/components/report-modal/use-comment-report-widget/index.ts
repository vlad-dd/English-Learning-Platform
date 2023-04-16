import { useMutation } from "@apollo/client";
import { SEND_REPORT } from "../graphql";

const useCommentReportWidget = () => {
    const [createReport, { loading, error }] = useMutation(SEND_REPORT);

    return {
        createReport,
        isLoading: loading,
        error
    }
}

export default useCommentReportWidget;