import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from '@mui/material';
import { closeUserProfileModal } from '../../../store/reducers/user-profile-modal';
import * as selectors from '../../../store/selectors'
import MainInformationBlock from './components/main-information-block';
import CommunicationBlock from './components/communication-block';
import { CLOSE_PROFILE_MODAL_BUTTON_DATA_TEST_ID, PROFILE_MODAL_DATA_TEST_ID } from './constants';
import { StyledDialogActions, StyledUserProfileBox, StyledUserProfileWrapper } from './styled';
import { FormattedMessage } from 'react-intl';
import { APPLICATION_MODALS } from '../../../translations/constants';

const ProfileModal = () => {
    const dispatch = useDispatch();
    const { isOpen } = useSelector(selectors.userProfileModalState);
    return (
        <Modal
            open={isOpen}
            data-testid={PROFILE_MODAL_DATA_TEST_ID}
            onClose={() => dispatch(closeUserProfileModal())}
        >
            <StyledUserProfileBox>
                <StyledUserProfileWrapper>
                    <MainInformationBlock />
                    <CommunicationBlock />
                </StyledUserProfileWrapper>
                <StyledDialogActions>
                    <Button
                        data-testid={CLOSE_PROFILE_MODAL_BUTTON_DATA_TEST_ID}
                        onClick={() => dispatch(closeUserProfileModal())}
                    >
                        <FormattedMessage id={APPLICATION_MODALS.PROFILE_MODAL_CLOSE_BUTTON} />
                    </Button>
                </StyledDialogActions>
            </StyledUserProfileBox>
        </Modal>
    )
}

export default ProfileModal;