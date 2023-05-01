import { Button } from "@mui/material"
import { AiOutlineFilePdf } from 'react-icons/ai';
import { StyledReportBlock } from "../styled"
import { IApplicationReportBlock } from "../../../types";

const ApplicationReportBlock = ({ setIsOpen, application, date }: IApplicationReportBlock) => {
    return (
        <StyledReportBlock>
            <span>{application}</span>
            <span>{date}</span>
            <Button
                variant="outlined"
                onClick={() => setIsOpen(true)}
                style={{ height: "30px", display: "flex", gap: "10px", border: "1px solid purple", color: "white" }}>
                <AiOutlineFilePdf size={18} />
                File
            </Button>
        </StyledReportBlock>
    )
};

export default ApplicationReportBlock;