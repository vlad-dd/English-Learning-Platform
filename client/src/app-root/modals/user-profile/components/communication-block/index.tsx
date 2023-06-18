import { FormattedMessage } from 'react-intl';
import { Button } from '@mui/material'
import { Tabs } from 'antd'
import { AiOutlineUserAdd, AiFillMessage } from 'react-icons/ai'
import { MdOutlineReportGmailerrorred } from 'react-icons/md';
import { ReportDialog } from '../../../../../Сommon';
import { APPLICATION_MODALS } from '../../../../../translations/constants';
import { useCommunicationBlockWidget } from '../../use-communication-widget';
import {
    COMMUNICATION_BLOCK_DATA_TEST_ID,
    PROFILE_TAB_ACTIONS, REPORT_USER_BUTTON_DATA_TEST_ID,
    SEND_MESSAGE_BUTTON_DATA_TEST_ID,
    USER_DETAILS_DATA_TEST_ID
} from '../../constants';
import {
    StyledCommunicationBlockWrapper,
    StyledActionText,
    StyledUserDetails,
    StyledUserNickname,
    StyledUserProfileActionsWrapper,
    StyledProfileTabsWrapper,
    StyledActivityTag
} from '../../styled';

const CommunicationBlock = () => {
    const { isOpen, handleOpening, createReportAppeal, isLoading, error } = useCommunicationBlockWidget();

    return (
        <StyledCommunicationBlockWrapper data-testid={COMMUNICATION_BLOCK_DATA_TEST_ID}>
            <ReportDialog
                title={<FormattedMessage id={APPLICATION_MODALS.REPORT_USER_PROFILE_MODAL_TITLE} />}
                description={<FormattedMessage id={APPLICATION_MODALS.REPORT_USER_PROFILE_MODAL_DESCRIPTION} />}
                isOpen={isOpen}
                handleClose={handleOpening}
                createReportAppeal={createReportAppeal}
                isLoading={isLoading}
                error={error}
            />
            <StyledUserDetails data-testid={USER_DETAILS_DATA_TEST_ID}>
                <StyledUserNickname>
                    <span>Green Ogre</span>
                    <AiOutlineUserAdd />
                </StyledUserNickname>
                <StyledActivityTag color='green'>Online</StyledActivityTag>
            </StyledUserDetails>

            <StyledUserProfileActionsWrapper>
                <Button variant="outlined" data-testid={SEND_MESSAGE_BUTTON_DATA_TEST_ID}>
                    <StyledActionText>
                        <FormattedMessage defaultMessage="Send Message" id={SEND_MESSAGE_BUTTON_DATA_TEST_ID} />
                    </StyledActionText>
                    <AiFillMessage size={19} />
                </Button>
                <Button variant="outlined" onClick={handleOpening} data-testid={REPORT_USER_BUTTON_DATA_TEST_ID}>
                    <StyledActionText>
                        <FormattedMessage defaultMessage="Report user" id={REPORT_USER_BUTTON_DATA_TEST_ID} />
                    </StyledActionText>
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