import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SelectReportReason from './components/select-report-reason';
import AdditionalInput from './components/additional-input';
import ModalActions from './components/dialog-actions';
import { useReportDialogWidget } from './use-report-dialog-widget';
import { IReportDialog } from './types';
import { StyledErrorMessage } from './styled';
import {
    REPORT_DIALOG_CONTENT_DATA_TEST_ID,
    REPORT_DIALOG_ERROR_MESSAGE,
    REPORT_MODAL_DIALOG_DATA_TEST_ID
} from './constants';

const ReportDialog = ({ isOpen, error, handleClose, isLoading, createReportAppeal, title, description }: IReportDialog) => {

    const { selectedReason, additionalInformation, setSelectedReason, setAdditionalInformation } = useReportDialogWidget(isOpen);

    return (
        <Dialog
            data-testid={REPORT_MODAL_DIALOG_DATA_TEST_ID}
            open={isOpen || !!error}
            onClose={handleClose}
        >
            <DialogTitle>{title}</DialogTitle>
            {!(!!error) ?
                <>
                    <DialogContent data-testid={REPORT_DIALOG_CONTENT_DATA_TEST_ID}>
                        <DialogContentText>
                            {description}
                        </DialogContentText>
                        <SelectReportReason selectedReason={selectedReason} setSelectedReason={setSelectedReason} />
                        <AdditionalInput setAdditionalInformation={setAdditionalInformation} />
                    </DialogContent>
                    <ModalActions
                        selectedReason={selectedReason}
                        additionalInformation={additionalInformation}
                        isLoading={isLoading}
                        error={error}
                        createReportAppeal={createReportAppeal}
                        handleClose={handleClose}
                    />
                </>

                :
                <StyledErrorMessage>
                    {REPORT_DIALOG_ERROR_MESSAGE}
                </StyledErrorMessage>
            }
        </Dialog>
    )
}

export default ReportDialog;