import React, { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SelectReportReason from "./components/modal-select";
import AdditionalInput from "./components/additional-input";
import ModalActions from "./components/modal-actions";

const ReportCommentModal = ({ isOpen, setOpen, commentID }: any) => {

    const [additionalInformation, setAdditionalInformation] = useState('');

    const [selectedReason, setSelectedReason] = useState('');

    const handleClose = () => {
        setOpen(false);
    };

    const createUserAppeal = () => {
        console.log({ comment: commentID, reason: selectedReason, additionalInformation })
    }

    return (
        <>
            <Dialog open={isOpen} onClose={handleClose}>
                <DialogTitle>Report Inappropriate Comment👮‍♀️</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Our easy-to-use comment reporting feature allows you to quickly and easily report any comments that do not match our English Learning Platform policy. We want to ensure that our platform is a safe and respectful space for all users, and we rely on your help to achieve this goal.
                    </DialogContentText>
                    <SelectReportReason selectedReason={selectedReason} setSelectedReason={setSelectedReason} />
                    <AdditionalInput setAdditionalInformation={setAdditionalInformation} />
                </DialogContent>
                <ModalActions
                    selectedReason={selectedReason}
                    setSelectedReason={setSelectedReason}
                    createUserAppeal={createUserAppeal}
                    handleClose={handleClose}
                />
            </Dialog>
        </>
    )

};

export default ReportCommentModal;