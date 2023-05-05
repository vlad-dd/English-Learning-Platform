import useCommentReportWidget from "./use-comment-report-widget";
import { ReportDialog } from "../../..";
import { IReportCommentModal } from "../../types";

const ReportCommentModal = ({ isOpen, setOpen, commentID }: IReportCommentModal) => {

    const { createReport, isLoading, error } = useCommentReportWidget();

    const handleClose = () => {
        setOpen(false);
    };

    const createUserAppeal = async (selectedReason: string, additionalInformation: string) => {
        await createReport({ variables: { commentID, selectedReason, additionalInformation } });
    }

    return (
        <ReportDialog
          isOpen={isOpen}
          handleClose={handleClose}
          title="Report Inappropriate Comment👮‍♀️"
          description="Our easy-to-use comment reporting feature allows you to quickly and easily report any comments that do not match our English Learning Platform policy. We want to ensure that our platform is a safe and respectful space for all users, and we rely on your help to achieve this goal."
          createReportAppeal={createUserAppeal}
          isLoading={isLoading}
          error={error}
        />
    )

};

export default ReportCommentModal;