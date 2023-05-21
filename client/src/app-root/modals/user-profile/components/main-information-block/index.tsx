import { Avatar, Divider } from "@mui/material";
import { Tag } from "antd";
import { StyledInformationTag, StyledMainInformationBlock, StyledUserAvatarWrapper } from "../../styled";
import { MAIN_INFORMATION_BLOCK_ID } from "../../constants";

const MainInformationBlock = () => {
    return (
        <StyledMainInformationBlock data-testid={MAIN_INFORMATION_BLOCK_ID}>
            <StyledUserAvatarWrapper>
                <Avatar
                    style={{ height: "200px", width: "200px", objectFit: "cover", cursor: "pointer" }}
                    alt="avatar"
                    src="https://ichef.bbci.co.uk/images/ic/640x360/p01gz4lb.jpg" />
            </StyledUserAvatarWrapper>
            <StyledInformationTag><Tag color='purple'>Student</Tag></StyledInformationTag>
            <StyledInformationTag><Tag color='pink'>B1</Tag></StyledInformationTag>
            <Divider />
        </StyledMainInformationBlock>
    )
}

export default MainInformationBlock;