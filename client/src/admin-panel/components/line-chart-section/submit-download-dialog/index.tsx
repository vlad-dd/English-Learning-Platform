import { Button, Dialog, DialogActions, DialogContentText, DialogTitle } from "@mui/material";

const SubmitDownloadDialog = ({ isOpen, setIsOpen }: any) => {
    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen((prev: boolean) => !prev)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Do you really want to download reports for Tenses?
            </DialogTitle>
            <DialogTitle>
                <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
            </DialogTitle>
            <DialogActions>
                <Button onClick={() => setIsOpen((prev: boolean) => !prev)}>Display in browser</Button>
                <Button onClick={() => setIsOpen((prev: boolean) => !prev)} autoFocus>Download</Button>
            </DialogActions>
        </Dialog>
    )
};

export default SubmitDownloadDialog;