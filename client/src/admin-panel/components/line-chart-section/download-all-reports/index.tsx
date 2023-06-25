import { FormattedMessage } from "react-intl";
import { HiOutlineDownload } from "react-icons/hi";
import { ADMIN_PANEL } from "../../../../translations/constants";
import { DOWNLOAD_ALL_REPORTS_BUTTON_ID } from "../../../constants";
import { StyledLineChartReports } from "../styled";

const DownloadAllReportsButton = () => {
    return (
        <StyledLineChartReports
            data-testid={DOWNLOAD_ALL_REPORTS_BUTTON_ID}
            color="secondary"
        >
            <HiOutlineDownload size={18} />
            <FormattedMessage id={ADMIN_PANEL.ALL_APPLICATION_REPORTS} />
        </StyledLineChartReports>
    )
}

export default DownloadAllReportsButton;