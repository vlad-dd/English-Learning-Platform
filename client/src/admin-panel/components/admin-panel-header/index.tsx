import { FormattedMessage } from "react-intl";
import { HiOutlineDownload } from "react-icons/hi";
import { Title } from "../../../Сommon";
import { ADMIN_PANEL } from "../../../translations/constants";
import { ADMIN_PANEL_HEADER_DATA_TEST_ID, ADMIN_PANEL_DOWNLOAD_BUTTON_DATA_TEST_ID } from "../../constants";
import {
    AdminPanelHeaderWrapper,
    StyledButtonBody,
    StyledGeneralApplicationReport
} from "./styled";

const AdminPanelHeader = () => {
    return (
        <AdminPanelHeaderWrapper data-testid={ADMIN_PANEL_HEADER_DATA_TEST_ID}>
            <Title styles={{ fontSize: "2.5rem", margin: "20px" }}>
                <FormattedMessage id={ADMIN_PANEL.TITLE} />
            </Title>
            <StyledGeneralApplicationReport>
                <StyledButtonBody data-testid={ADMIN_PANEL_DOWNLOAD_BUTTON_DATA_TEST_ID}>
                    <HiOutlineDownload size={18} />
                    <FormattedMessage id={ADMIN_PANEL.DOWNLOAD_FULL_REPORT_BUTTON} />
                </StyledButtonBody>
            </StyledGeneralApplicationReport>
        </AdminPanelHeaderWrapper>
    )
};

export default AdminPanelHeader;