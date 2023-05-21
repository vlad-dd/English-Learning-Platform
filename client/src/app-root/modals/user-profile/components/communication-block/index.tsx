import { Button } from '@mui/material'
import { Tabs, Tag } from 'antd'
import { AiOutlineUserAdd, AiFillMessage } from 'react-icons/ai'
import { MdOutlineReportGmailerrorred } from 'react-icons/md';
import { ReportDialog } from '../../../../../Сommon';
import { useCommunicationBlockWidget } from '../../use-communication-widget';
import { COMMUNICATION_BLOCK_ID, PROFILE_TAB_ACTIONS } from '../../constants';
import {
    StyledCommunicationBlockWrapper,
    StyledActionText,
    StyledUserDetails,
    StyledUserNickname,
    StyledUserProfileActionsWrapper,
    StyledProfileTabsWrapper
} from '../../styled';

const CommunicationBlock = () => {
    const { isOpen, handleOpening, createReportAppeal, isLoading, error } = useCommunicationBlockWidget();
    
    return (
        <StyledCommunicationBlockWrapper data-testid={COMMUNICATION_BLOCK_ID}>
            <ReportDialog
                title="Report Inappropriate User👮‍♀️"
                description="Our user complaint feature allows you to report any behavior or content that you believe violates our English Learning Platform policies. We take all complaints seriously and strive to ensure that our platform is a safe and welcoming space for all users."
                isOpen={isOpen}
                handleClose={handleOpening}
                createReportAppeal={createReportAppeal}
                isLoading={isLoading}
                error={error}
            />
            <StyledUserDetails data-testid="user-details-block">
                <StyledUserNickname>
                    <span>Green Ogre</span>
                    <AiOutlineUserAdd />
                </StyledUserNickname>
                <Tag style={{ borderRadius: "50px", fontSize: "0.8rem" }} color='green'>Online</Tag>
            </StyledUserDetails>

            <StyledUserProfileActionsWrapper>
                <Button variant="outlined" data-testid="send-message-button">
                    <StyledActionText>Send Message</StyledActionText>
                    <AiFillMessage size={19} />
                </Button>
                <Button variant="outlined" onClick={handleOpening} data-testid="report-user-button">
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