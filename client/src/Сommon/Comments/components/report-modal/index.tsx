import React, { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SelectReportReason from "./components/modal-select";
import AdditionalInput from "./components/additional-input";
import ModalActions from "./components/modal-actions";
import { IReportCommentModal } from "../../types";
import useCommentReportWidget from "./use-comment-report-widget";

const ReportCommentModal = ({ isOpen, setOpen, commentID }: IReportCommentModal) => {

    const [additionalInformation, setAdditionalInformation] = useState('');

    const { createReport, isLoading, error } = useCommentReportWidget();

    const [selectedReason, setSelectedReason] = useState('');

    const handleClose = () => {
        setOpen(false);
    };

    const createUserAppeal = async () => {
        await createReport({ variables: { commentID, selectedReason, additionalInformation } });
    }

    return (
        <Dialog
            data-testid="report-modal-dialog"
            open={isOpen || !!error}
            onClose={handleClose}
        >
            <DialogTitle>Report Inappropriate Comment👮‍♀️</DialogTitle>
            {!(!!error) ?
                <>
                    <DialogContent>
                        <DialogContentText>
                            Our easy-to-use comment reporting feature allows you to quickly and easily report any comments that do not match our English Learning Platform policy. We want to ensure that our platform is a safe and respectful space for all users, and we rely on your help to achieve this goal.
                        </DialogContentText>
                        <SelectReportReason selectedReason={selectedReason} setSelectedReason={setSelectedReason} />
                        <AdditionalInput setAdditionalInformation={setAdditionalInformation} />
                    </DialogContent>
                    <ModalActions
                        selectedReason={selectedReason}
                        isLoading={isLoading}
                        error={error}
                        createUserAppeal={createUserAppeal}
                        handleClose={handleClose}
                    />
                </>

                :
                <div>We are having some problems with sending your report...</div>
            }
        </Dialog>
    )

};

export default ReportCommentModal;