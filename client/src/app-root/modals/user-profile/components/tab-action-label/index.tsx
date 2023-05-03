import { StyledTabLabel } from "../../styled";

const TabActionLabel = ({ label, Icon }: any) => {
    return (
        <StyledTabLabel>
            <span style={{ marginRight: "5px" }}>{label}</span>
            <Icon />
        </StyledTabLabel>
    )
}

export default TabActionLabel;