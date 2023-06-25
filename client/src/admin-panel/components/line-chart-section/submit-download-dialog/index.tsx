import { FormattedMessage } from "react-intl";
import { Button, Dialog, DialogActions, DialogContentText, DialogTitle } from "@mui/material";
//@ts-ignore
import statisicPDF from './elp-stat.pdf';
import { ISubmitDownloadDialog } from "../../../types";
import { ALERT_DIALOG_DESCRIPTION_ID, ALERT_DIALOG_TITLE_ID } from "../../../constants";
import { ADMIN_PANEL } from "../../../../translations/constants";
import { StyledFileLink } from "../styled";

const SubmitDownloadDialog = ({ isOpen, setIsOpen }: ISubmitDownloadDialog) => {
    return (
        <>
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <DialogTitle id={ALERT_DIALOG_TITLE_ID}>
                    <FormattedMessage id={ADMIN_PANEL.DOWNLOAD_FILE_DIALOG_TITLE} />
                </DialogTitle>
                <DialogTitle>
                    <DialogContentText id={ALERT_DIALOG_DESCRIPTION_ID}>
                     <FormattedMessage id={ADMIN_PANEL.DOWNLOAD_FILE_DIALOG_DESCRIPTION} />
                    </DialogContentText>
                </DialogTitle>
                <DialogActions>
                    <Button onClick={() => setIsOpen(false)}>
                        <StyledFileLink href={statisicPDF} target="_blank">
                            <FormattedMessage id={ADMIN_PANEL.DISPLAY_IN_BROWSER_FILE} />
                        </StyledFileLink>
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
};

export default SubmitDownloadDialog;