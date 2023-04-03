import React from "react";
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import { useBoolean } from "../../../../../../Hooks";

const AdditionalInput = ({ setAdditionalInformation }: any) => {
    const [showAdditionalInput, setShowAdditionalInput] = useBoolean();

    return (
        <React.Fragment>
            <h3 style={{ marginTop: "20px" }}>Want to add an additional information?</h3>
            <Switch checked={showAdditionalInput} onClick={() => setShowAdditionalInput((prev: boolean) => !prev)} />
            {showAdditionalInput && (
                <TextField
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