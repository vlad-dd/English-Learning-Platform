import { ITabActionLabel } from "../../types";
import { StyledTabLabel, StyledTabLabelContainer } from "../../styled";

const TabActionLabel = ({ label, Icon }: ITabActionLabel) => {
    return (
        <StyledTabLabelContainer>
            <StyledTabLabel>{label}</StyledTabLabel>
            <Icon />
        </StyledTabLabelContainer>
    )
}

export default TabActionLabel;