import { FormattedMessage } from "react-intl";
import { AiOutlineFilePdf } from 'react-icons/ai';
import { ADMIN_PANEL } from "../../../../translations/constants";
import { IApplicationReportBlock } from "../../../types";
import { APPLICATION_REPORT_BLOCK_ID } from "../../../constants";
import {
    StyledApplicationName,
    StyledDate,
    StyledParticularLineChartReport,
    StyledReportBlock
} from "../styled"

const ApplicationReportBlock = ({ setIsOpen, application, date }: IApplicationReportBlock) => {
    return (
        <StyledReportBlock data-testid={APPLICATION_REPORT_BLOCK_ID}>
            <StyledApplicationName>{application}</StyledApplicationName>
            <StyledDate>{date}</StyledDate>
            <StyledParticularLineChartReport
                variant="outlined"
                onClick={() => setIsOpen(true)}
            >
                <AiOutlineFilePdf size={18} />
                <FormattedMessage id={ADMIN_PANEL.FILE} />
            </StyledParticularLineChartReport>
        </StyledReportBlock>
    )
};

export default ApplicationReportBlock;