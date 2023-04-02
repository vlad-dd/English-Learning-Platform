import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from "antd";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LoadingButton from '@mui/lab/LoadingButton';
import Switch from '@mui/material/Switch';
import SendIcon from '@mui/icons-material/Send';
import { Backdrop, CircularProgress } from "@mui/material";
import { message } from 'antd';
import { POLICY_RULES } from "../../constants";

const ReportCommentModal = ({ isOpen, setOpen, commentID }: any) => {

    const [showAdditionalInput, setShowAdditionalInput] = useState(false);
    const [showBackDrop, setShowBackDrop] = useState(false);

    const [additionalInformation, setAdditionalInformation] = useState('');

    const [selectedReason, setSelectedReason] = useState('');

    const handleClose = () => {
        setOpen(false);
    };

    const createUserAppeal = () => {
        console.log({ comment: commentID ,reason: selectedReason, additionalInformation })
    }

    return (
        <>
            <Dialog open={isOpen} onClose={handleClose}>
                <DialogTitle>Report Inappropriate Comment👮‍♀️</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Our easy-to-use comment reporting feature allows you to quickly and easily report any comments that do not match our English Learning Platform policy. We want to ensure that our platform is a safe and respectful space for all users, and we rely on your help to achieve this goal.
                    </DialogContentText>

                    <Box marginTop="20px" sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Reason</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedReason}
                                label="Reason"
                                onChange={(e) => setSelectedReason(e.target.value)}
                            >
                                {POLICY_RULES.map((reason) => <MenuItem key={reason} value={reason}>{reason}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </Box>

                    <h3 style={{ marginTop: "20px" }}>Want to add an additional information?</h3>
                    <Switch checked={showAdditionalInput} onClick={() => setShowAdditionalInput((prev: boolean) => !prev)}/>
                    {showAdditionalInput && (
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            onChange={(e) => setAdditionalInformation(e.target.value)}
                            label="Additional information"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                    )}

                </DialogContent>
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
                                (() => message.success('Thank you for helping us to make our platform better!'))();
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
            </Dialog>
        </>
    )

};

export default ReportCommentModal;