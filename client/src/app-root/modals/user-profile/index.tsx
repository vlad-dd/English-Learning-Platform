import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, DialogActions, Modal, Divider, Avatar } from '@mui/material';
import * as selectors from '../../../store/selectors'
import { closeUserProfileModal } from '../../../store/reducers/user-profile-modal';
import { Tag } from 'antd';
import { AiFillMessage } from 'react-icons/ai'
import { MdOutlineReportGmailerrorred } from 'react-icons/md';
import { AiOutlineUserAdd, AiOutlineTrophy } from 'react-icons/ai'
import { Tabs } from 'antd';
import { ProgressBar, Title } from '../../../Сommon';

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

const items = [
    {
        key: '1',
        label: <div style={{ display: "flex", alignItems: "center" }}><span style={{ marginRight: "5px" }}>Achievements</span><AiOutlineTrophy /></div>,
        children: <div>
            <Tag color='green'>A0 Level Passed</Tag>
            <Tag color='orange'>A1 Level Passed</Tag>
            <Tag color='purple'>A2 Level Passed</Tag>
        </div>,
    },
    {
        key: '2',
        label: `Progress`,
        children: <div style={{ display: "flex", flexDirection: "column" }}>
            Tests: <ProgressBar type="line" percent={40} width={40} />
            Tests: <ProgressBar type="line" percent={20} width={40} />
            Tests: <ProgressBar type="line" percent={5} width={40} />
            Tests: <ProgressBar type="line" percent={60} width={40} />
            Tests: <ProgressBar type="line" percent={90} width={40} />
            Tests: <ProgressBar type="line" percent={35} width={40} />
        </div>
    },
];

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

                <div style={{ display: "flex", gap: "30px", marginBottom: "55px" }}>
                    <div style={{ height: "100%", width: "400px", background: "whitesmoke", display: "flex" }}>
                        <div style={{ padding: "25px" }}>
                            <Avatar style={{ height: "200px", width: "200px", objectFit: "cover", cursor: "pointer" }} alt="avatar" src="https://ichef.bbci.co.uk/images/ic/640x360/p01gz4lb.jpg" />
                        </div>
                        <div style={{ paddingTop: "25px" }}><Tag color='purple'>Student</Tag></div>
                        <div style={{ paddingTop: "25px" }}><Tag color='pink'>B1</Tag></div>
                        <Divider />

                    </div>


                    <div style={{ height: "100%", width: "400px", background: "whitesmoke" }}>

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "25px" }}>
                            <div style={{ fontSize: "1.8rem", display: "flex", alignItems: "center" }}>
                                <span>Green Ogre</span>
                                <AiOutlineUserAdd style={{ cursor: "pointer" }} />
                            </div>
                            <Tag style={{ borderRadius: "50px", fontSize: "0.8rem" }} color='green'>Online</Tag>
                            {/* <Tag style={{ borderRadius: "50px", fontSize: "0.8rem" }} color='orange'>Away</Tag> */}
                            {/* <Tag style={{ borderRadius: "50px", fontSize: "0.8rem" }} color='red'>Offline</Tag> */}
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", padding: "15px 25px 15px 25px" }}>
                            <Button variant="outlined">
                                <span style={{ marginRight: "5px" }}>Send Message</span>
                                <AiFillMessage size={19} />
                            </Button>
                            {/* <Button variant="outlined">Outlined</Button> */}
                            <Button variant="outlined">
                                <span style={{ marginRight: "5px" }}>Report User</span>
                                <MdOutlineReportGmailerrorred size={19} />
                            </Button>
                        </div>

                        <div style={{ padding: "25px" }}>
                            <Tabs defaultActiveKey="1" items={items} />
                        </div>


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