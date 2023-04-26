import { Button, Dialog, DialogActions, DialogContentText, DialogTitle, Portal } from "@mui/material";
//@ts-ignore
import statisicPDF from './elp-stat.pdf';

const SubmitDownloadDialog = ({ isOpen, setIsOpen }: any) => {
    return (
        <>
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen((prev: boolean) => !prev)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Do you really want to download reports for [Application Name] ?
                </DialogTitle>
                <DialogTitle>
                    <DialogContentText id="alert-dialog-description">
                        This file provides a comprehensive analysis of the issues encountered in the [Application Name] during a specific time period. The document presents a detailed overview of the issues, their frequency, and their impact on the application's performance and user experience.
                    </DialogContentText>
                </DialogTitle>
                <DialogActions>
                    <Button onClick={() => setIsOpen(false)}>
                        <a href={statisicPDF} target="_blank">Display in browser</a>
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
};

export default SubmitDownloadDialog;