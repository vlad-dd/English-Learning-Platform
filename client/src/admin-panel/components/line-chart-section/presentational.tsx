import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Title } from "../../../Сommon";
import ApplicationReportBlock from "./report-block";
import SubmitDownloadDialog from "./submit-download-dialog";
import DownloadAllReportsButton from "./download-all-reports";
import { APPLICATION_REPORT_BLOCKS, LINE_CHART_SECTION, lineData } from "../../constants";
import { StyledLineChartSectionWrapper, StyledReportBlockSection } from "./styled";

const LineChartSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Title styles={{ margin: "50px" }}>Line Chart Of Reports By Application</Title>
            <StyledLineChartSectionWrapper data-testid={LINE_CHART_SECTION}>
                <Line data={lineData} />
                <StyledReportBlockSection>
                    <SubmitDownloadDialog isOpen={isOpen} setIsOpen={setIsOpen} />
                    {APPLICATION_REPORT_BLOCKS.map((props) => <ApplicationReportBlock setIsOpen={setIsOpen} {...props} />)}
                    <DownloadAllReportsButton />
                </StyledReportBlockSection>
            </StyledLineChartSectionWrapper>
        </>
    )
};

export default LineChartSection;