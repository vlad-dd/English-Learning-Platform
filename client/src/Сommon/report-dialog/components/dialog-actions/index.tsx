import { Button } from "antd";
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { Backdrop, CircularProgress } from "@mui/material";
import DialogActions from '@mui/material/DialogActions';
import { successMessage } from "../../../../utils/utils";

const ModalActions = ({ selectedReason, additionalInformation, createReportAppeal, isLoading, handleClose }: any) => {
    return (
        <DialogActions data-testid="dialog-actions">
            <Button data-testid="dialog-actions-cancel-button" onClick={handleClose}>Cancel</Button>
            <LoadingButton
                data-testid="dialog-actions-loading-button"
                size="small"
                color="info"
                disabled={!selectedReason}
                loading={isLoading}
                onClick={async() => {
                    await createReportAppeal(selectedReason, additionalInformation);
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
                data-testid="dialog-actions-backdrop-wrapper"
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
