import { Button } from '@mui/material'
import { Tabs, Tag } from 'antd'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { AiFillMessage } from 'react-icons/ai'
import { MdOutlineReportGmailerrorred } from 'react-icons/md';
import {
    StyledCommunicationBlockWrapper,
    StyledActionText,
    StyledUserDetails,
    StyledUserNickname,
    StyledUserProfileActionsWrapper,
    StyledProfileTabsWrapper
} from '../../styled';
import { PROFILE_TAB_ACTIONS } from '../../constants';

const CommunicationBlock = () => {
    return (
        <StyledCommunicationBlockWrapper>
            <StyledUserDetails>
                <StyledUserNickname>
                    <span>Green Ogre</span>
                    <AiOutlineUserAdd style={{ cursor: "pointer" }} />
                </StyledUserNickname>
                <Tag style={{ borderRadius: "50px", fontSize: "0.8rem" }} color='green'>Online</Tag>
            </StyledUserDetails>

            <StyledUserProfileActionsWrapper>
                <Button variant="outlined">
                    <StyledActionText>Send Message</StyledActionText>
                    <AiFillMessage size={19} />
                </Button>
                <Button variant="outlined">
                    <StyledActionText>Report User</StyledActionText>
                    <MdOutlineReportGmailerrorred size={19} />
                </Button>
            </StyledUserProfileActionsWrapper>

            <StyledProfileTabsWrapper>
                <Tabs defaultActiveKey="1" items={PROFILE_TAB_ACTIONS} />
            </StyledProfileTabsWrapper>
        </StyledCommunicationBlockWrapper>
    )
}

export default CommunicationBlock;