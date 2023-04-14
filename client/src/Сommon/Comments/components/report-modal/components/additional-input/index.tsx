import React from "react";
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import { useBoolean } from "../../../../../../Hooks";
import { IAdditionalInput } from "../../../../types";

const AdditionalInput = ({ setAdditionalInformation }: IAdditionalInput) => {
    const [showAdditionalInput, setShowAdditionalInput] = useBoolean();
    return (
        <React.Fragment>
            <h3 style={{ marginTop: "20px" }}>Want to add an additional information?</h3>
            <Switch checked={showAdditionalInput} onClick={() => setShowAdditionalInput((prev: boolean) => !prev)} />
            {showAdditionalInput && (
                <TextField
                  data-testid="additional-report-modal-input"
                  label="Additional information"
                  fullWidth
                  autoFocus
                  onChange={(e) => setAdditionalInformation(e.target.value)}
                />
            )}
        </React.Fragment>
    )
}

export default AdditionalInput;