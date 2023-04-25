import PieCard from "./pie-card";
import { admin_dashboard_blocks } from "../../constants";
import { StyledPieChartSectionWrapper } from "./styled";

const PieChartSection = () => {
    return (
        <StyledPieChartSectionWrapper>
            {admin_dashboard_blocks.map((props) => <PieCard {...props} />)}
        </StyledPieChartSectionWrapper>
    )
}

export default PieChartSection;