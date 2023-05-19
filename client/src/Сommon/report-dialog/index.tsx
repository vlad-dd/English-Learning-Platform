import { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SelectReportReason from './components/select-report-reason';
import AdditionalInput from './components/additional-input';
import ModalActions from './components/dialog-actions';
import { IReportDialog } from './types';
import { REPORT_DIALOG_ERROR_MESSAGE } from './constants';

const ReportDialog = ({ isOpen, error, handleClose, isLoading, createReportAppeal, title, description }: IReportDialog) => {
    const [selectedReason, setSelectedReason] = useState('');
    const [additionalInformation, setAdditionalInformation] = useState('');

    useEffect(() => {
        setSelectedReason("");
    }, [isOpen])

    return (
        <Dialog
            data-testid="report-modal-dialog"
            open={isOpen || !!error}
            onClose={handleClose}
        >
            <DialogTitle>{title}</DialogTitle>
            {!(!!error) ?
                <>
                    <DialogContent data-testid="report-dialog-content">
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
                <div>{REPORT_DIALOG_ERROR_MESSAGE}</div>
            }
        </Dialog>
    )
}

export default ReportDialog;