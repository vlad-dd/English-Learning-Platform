import React, { memo } from "react";
import { FormattedMessage } from "react-intl";
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import { useBoolean } from "../../../../Hooks";
import { IAdditionalInput } from "../../types";
import { TENSES_PAGE } from "../../../../translations/constants";
import { StyledAdditionalInputTitle } from "../../styled";

const AdditionalInput = memo(({ setAdditionalInformation }: IAdditionalInput) => {
    const [showAdditionalInput, setShowAdditionalInput] = useBoolean();
    return (
        <React.Fragment>
            <StyledAdditionalInputTitle>
                <FormattedMessage id={TENSES_PAGE.REPORT_DIALOG_ADDITIONAL_INPUT_TITLE} />
            </StyledAdditionalInputTitle>
            <Switch
                checked={showAdditionalInput}
                onClick={() => setShowAdditionalInput((prev: boolean) => !prev)} />
            {showAdditionalInput && (
                <TextField
                    label={<FormattedMessage id={TENSES_PAGE.REPORT_DIALOG_ADDITIONAL_INPUT_LABEL} />}
                    inputProps={{ "data-testid": "additional-report-modal-input" }}
                    fullWidth
                    autoFocus
                    onChange={({ target: { value } }) => setAdditionalInformation(value)}
                />
            )}
        </React.Fragment>
    )
})

export default AdditionalInput;