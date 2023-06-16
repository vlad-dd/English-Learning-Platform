import { FormattedMessage } from "react-intl";
import { Result } from "antd";
import { uid } from "../../../../utils/utils";
import { SUPPORT_TEAM } from "../../../../translations/constants";

const ReportResult = () => {
    return (
        <Result
            status="success"
            title={<FormattedMessage id={SUPPORT_TEAM.SEND_REPORT_MODAL_FEEDBACK_TITLE} />}
            subTitle={
                <>
                    <FormattedMessage id={SUPPORT_TEAM.SEND_REPORT_MODAL_NUMBER} /> {uid(10)}.
                    {" "}
                    <FormattedMessage id={SUPPORT_TEAM.SEND_REPORT_MODAL_THANK_MESSAGE} />
                </>
            }
        />
    );
};

export default ReportResult;