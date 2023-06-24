import { Button } from "antd";
import { FormattedMessage } from "react-intl";
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { Backdrop, CircularProgress } from "@mui/material";
import DialogActions from '@mui/material/DialogActions';
import { successMessage } from "../../../../utils/utils";
import { TENSES_PAGE } from "../../../../translations/constants";
import { IDialogActions } from "../../types";
import { SYSTEM_FEEDBACK_MESSAGES } from "../../../constants";
import {
    DIALOG_ACTIONS_BACKDROP_WRAPPER_DATA_TEST_ID,
    DIALOG_ACTIONS_CANCEL_BUTTON_DATA_TEST_ID,
    DIALOG_ACTIONS_DATA_TEST_ID,
    DIALOG_ACTIONS_LOADING_BUTTON_DATA_TEST_ID
} from "../../constants";

const ModalActions = ({ selectedReason, additionalInformation, createReportAppeal, isLoading, handleClose }: IDialogActions) => {
    return (
        <DialogActions data-testid={DIALOG_ACTIONS_DATA_TEST_ID}>
            <Button
                data-testid={DIALOG_ACTIONS_CANCEL_BUTTON_DATA_TEST_ID}
                onClick={handleClose}>
                <FormattedMessage id={TENSES_PAGE.REPORT_DIALOG_ACTIONS_CANCEL_BUTTON} />
            </Button>
            <LoadingButton
                data-testid={DIALOG_ACTIONS_LOADING_BUTTON_DATA_TEST_ID}
                size="small"
                color="info"
                disabled={!selectedReason}
                loading={isLoading}
                onClick={async () => {
                    await createReportAppeal(selectedReason, additionalInformation);
                    successMessage(SYSTEM_FEEDBACK_MESSAGES.SUCCESS);
                    handleClose();
                }}
                loadingPosition="start"
                startIcon={<SendIcon />}
                variant="contained"
            >
                <FormattedMessage id={TENSES_PAGE.REPORT_DIALOG_ACTIONS_SEND_BUTTON} />
            </LoadingButton>
            <Backdrop
                data-testid={DIALOG_ACTIONS_BACKDROP_WRAPPER_DATA_TEST_ID}
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
