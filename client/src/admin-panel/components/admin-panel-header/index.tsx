import { Button } from "@mui/material";
import { HiOutlineDownload } from "react-icons/hi";
import { Title } from "../../../Сommon";
import { AdminPanelHeaderWrapper, StyledButtonBody } from "./styled";

const AdminPanelHeader = () => {
    return (
        <AdminPanelHeaderWrapper data-testid="admin-panel-header">
            <Title styles={{ fontSize: "2.5rem", margin: "20px" }}>Admin Control Dashboard</Title>
            <Button style={{ border: "1px solid purple", height: "40px", margin: "40px" }}>
                <StyledButtonBody data-testid="download-button">
                    <HiOutlineDownload size={18} />
                    Download Report
                </StyledButtonBody>
            </Button>
        </AdminPanelHeaderWrapper>
    )
}

export default AdminPanelHeader;