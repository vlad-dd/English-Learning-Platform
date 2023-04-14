import React from "react";
import { Button } from "antd";
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { Backdrop, CircularProgress } from "@mui/material";
import DialogActions from '@mui/material/DialogActions';
import { useBoolean } from "../../../../../../Hooks";
import { successMessage } from "../../../../../../utils/utils";
import { IModalActions } from "../../../../types";

const ModalActions = ({ selectedReason, createUserAppeal, handleClose }: IModalActions) => {
    const [showBackDrop, setShowBackDrop] = useBoolean();

    return (
        <DialogActions data-testid="dialog-actions">
        <Button onClick={handleClose}>Cancel</Button>
        <LoadingButton
            data-testid="loading-button"
            size="small"
            color="info"
            disabled={!selectedReason}
            loading={showBackDrop}
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
            data-testid="backdrop-wrapper"
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