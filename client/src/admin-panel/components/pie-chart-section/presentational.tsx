import PieCard from "./pie-card";
import { PIE_CARD_ID, admin_dashboard_blocks } from "../../constants";
import { StyledPieChartSectionWrapper } from "./styled";

const PieChartSection = () => {
    return (
        <StyledPieChartSectionWrapper data-testid={PIE_CARD_ID}>
            {admin_dashboard_blocks.map((props) => <PieCard {...props} />)}
        </StyledPieChartSectionWrapper>
    )
}

export default PieChartSection;