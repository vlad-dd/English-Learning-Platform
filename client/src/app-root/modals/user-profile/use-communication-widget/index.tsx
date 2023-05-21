import { useMutation } from "@apollo/client";
import { useBoolean } from "../../../../Hooks";
import { SEND_USER_REPORT_MUTATION } from "../graphql";

export const useCommunicationBlockWidget = () => {
    const [isOpen, handleOpening] = useBoolean();
    const [saveReport, { loading: isLoading, error }] = useMutation(SEND_USER_REPORT_MUTATION);
    const createReportAppeal = async (reason: string, additionalInformation: string) => await saveReport({ variables: { reason, additionalInformation } });

    return {
        isOpen,
        handleOpening,
        createReportAppeal,
        isLoading,
        error
    }
}