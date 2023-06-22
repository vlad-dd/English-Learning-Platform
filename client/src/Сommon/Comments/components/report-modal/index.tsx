import { FormattedMessage } from "react-intl";
import useCommentReportWidget from "./use-comment-report-widget";
import { ReportDialog } from "../../..";
import { IReportCommentModal } from "../../types";
import { TENSES_PAGE } from "../../../../translations/constants";

const ReportCommentModal = ({ isOpen, setOpen, commentID }: IReportCommentModal) => {

    const { createUserAppeal, isLoading, error } = useCommentReportWidget(commentID);

    return (
        <ReportDialog
            isOpen={isOpen}
            handleClose={() => setOpen(false)}
            title={<FormattedMessage id={TENSES_PAGE.REPORT_COMMENT_DIALOG_TITLE} />}
            description={<FormattedMessage id={TENSES_PAGE.REPORT_COMMENT_DIALOG_DESCRIPTION} />}
            createReportAppeal={createUserAppeal}
            isLoading={isLoading}
            error={error}
        />
    )

};

export default ReportCommentModal;