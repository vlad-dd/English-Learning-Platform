import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from '@mui/material';
import { closeUserProfileModal } from '../../../store/reducers/user-profile-modal';
import * as selectors from '../../../store/selectors'
import MainInformationBlock from './components/main-information-block';
import CommunicationBlock from './components/communication-block';
import { StyledDialogActions, StyledUserProfileBox, StyledUserProfileWrapper } from './styled';

const ProfileModal = () => {
    const dispatch = useDispatch();
    const { isOpen } = useSelector(selectors.userProfileModalState);
    return (
        <Modal
            open={isOpen}
            onClose={() => dispatch(closeUserProfileModal())}
        >
            <StyledUserProfileBox>
                <StyledUserProfileWrapper>
                    <MainInformationBlock />
                    <CommunicationBlock />
                </StyledUserProfileWrapper>
                <StyledDialogActions>
                    <Button
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