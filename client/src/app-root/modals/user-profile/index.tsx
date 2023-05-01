import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, DialogActions, Modal, Typography } from '@mui/material';
import * as selectors from '../../../store/selectors'
import { closeUserProfileModal } from '../../../store/reducers/user-profile-modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 800,
    // height: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ProfileModal = () => {
    const dispatch = useDispatch();
    const { isOpen } = useSelector(selectors.userProfileModalState);
    return (
        <Modal
            open={isOpen}
            onClose={() => dispatch(closeUserProfileModal())}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div style={{ display: "flex", gap: "30px" }}>
                    <div style={{ height: "100%", width: "400px" , background: "pink" }}>
                        <div style={{ padding: "25px" }}>
                        <img style={{ height: "200px", width: "200px", objectFit: "cover" }} 
                        src='https://pbs.twimg.com/media/Fgo7FnlWYAES53m.jpg:large' />
                        </div>
                        <div>Nickname: Hannah</div>
                    </div>
                    <div style={{ height: "100%", width: "400px", background: "green" }}>
                    <img style={{ height: "200px", objectFit: "cover" }} 
                        src='https://pbs.twimg.com/media/Fgo7FnlWYAES53m.jpg:large' />
                        <div>Nickname: Hannah</div>
                        <img style={{ height: "200px", objectFit: "cover" }} 
                        src='https://pbs.twimg.com/media/Fgo7FnlWYAES53m.jpg:large' />
                        <div>Nickname: Hannah</div>
                        <img style={{ height: "200px", objectFit: "cover" }} 
                        src='https://pbs.twimg.com/media/Fgo7FnlWYAES53m.jpg:large' />
                        <div>Nickname: Hannah</div>
                    </div>
                </div>
                <DialogActions style={{ background: "whitesmoke", position: "absolute", bottom: 0, width: "100%", left: 0 }}>
                    <Button
                    onClick={() => dispatch(closeUserProfileModal())}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Box>
        </Modal>
    )
}

export default ProfileModal;