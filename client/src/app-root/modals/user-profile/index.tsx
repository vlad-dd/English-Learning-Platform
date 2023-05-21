import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from '@mui/material';
import { closeUserProfileModal } from '../../../store/reducers/user-profile-modal';
import * as selectors from '../../../store/selectors'
import MainInformationBlock from './components/main-information-block';
import CommunicationBlock from './components/communication-block';
import { StyledDialogActions, StyledUserProfileBox, StyledUserProfileWrapper } from './styled';
import { PROFILE_MODAL_ID } from './constants';

const ProfileModal = () => {
    const dispatch = useDispatch();
    const { isOpen } = useSelector(selectors.userProfileModalState);
    return (
        <Modal
            open={isOpen}
            data-testid={PROFILE_MODAL_ID}
            onClose={() => dispatch(closeUserProfileModal())}
        >
            <StyledUserProfileBox>
                <StyledUserProfileWrapper>
                    <MainInformationBlock />
                    <CommunicationBlock />
                </StyledUserProfileWrapper>
                <StyledDialogActions>
                    <Button
                     data-testid="close-profile-modal-button"
                     onClick={() => dispatch(closeUserProfileModal())}
                    >
                        Close
                    </Button>
                </StyledDialogActions>
            </StyledUserProfileBox>
        </Modal>
    )
}

export default ProfileModal;