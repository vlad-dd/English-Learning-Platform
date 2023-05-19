import { Button } from "@mui/material";
import { HiOutlineDownload } from "react-icons/hi";
import { DOWNLOAD_ALL_REPORTS_BUTTON_ID } from "../../../constants";

const DownloadAllReportsButton = () => {
    return (
        <Button 
         data-testid={DOWNLOAD_ALL_REPORTS_BUTTON_ID}
         style={{ border: "1px solid purple", width: "100%", display: "flex", gap: "10px" }} 
         color="secondary"
         >
            <HiOutlineDownload size={18} />
            Get All Applications Reports
        </Button>
    )
}

export default DownloadAllReportsButton;