import React from "react";
import { Button } from "antd";
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { Backdrop, CircularProgress } from "@mui/material";
import DialogActions from '@mui/material/DialogActions';
import { successMessage } from "../../../../utils/utils";

const ModalActions = ({ selectedReason, additionalInformation, createReportAppeal, isLoading, handleClose }: any) => {
    return (
        <DialogActions data-testid="dialog-actions">
            <Button onClick={handleClose}>Cancel</Button>
            <LoadingButton
                data-testid="loading-button"
                size="small"
                color="info"
                disabled={!selectedReason}
                loading={isLoading}
                onClick={() => {
                    createReportAppeal(selectedReason, additionalInformation);
                    successMessage('Thank you for helping us to make our platform better!');
                    handleClose();
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
                open={isLoading}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </DialogActions>
    )
}

export default ModalActions;
