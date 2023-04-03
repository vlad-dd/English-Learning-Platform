import React from "react";
import { Button } from "antd";
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { Backdrop, CircularProgress } from "@mui/material";
import DialogActions from '@mui/material/DialogActions';
import { useBoolean } from "../../../../../../Hooks";
import { successMessage } from "../../../../../../utils";

const ModalActions = ({ selectedReason, createUserAppeal, handleClose }: any) => {
    const [showBackDrop, setShowBackDrop] = useBoolean();

    return (
        <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <LoadingButton
            size="small"
            color="info"
            disabled={!selectedReason}
            loading={false}
            onClick={() => {
                setShowBackDrop(true);
                setTimeout(() => {
                    createUserAppeal();
                    setShowBackDrop(false);
                    successMessage('Thank you for helping us to make our platform better!');
                    handleClose();
                }, 1500)
            }}
            loadingPosition="start"
            startIcon={<SendIcon />}
            variant="contained"
        >
            <span>Send</span>
        </LoadingButton>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={showBackDrop}
            onClick={handleClose}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    </DialogActions>
    )
}

export default ModalActions;