import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { POLICY_RULES } from "../../../../constants";
import { ISelectReportReason } from "../../../../types";

const SelectReportReason = ({ selectedReason, setSelectedReason }: ISelectReportReason) => {
    return (
        <Box marginTop="20px" sx={{ minWidth: 120 }} data-testid="select-reason-box">
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Reason</InputLabel>
                <Select
                    data-testid="reason-selector"
                    label="Reason"
                    value={selectedReason}
                    onChange={(e) => setSelectedReason(e.target.value)}
                >
                    {POLICY_RULES.map((reason) => <MenuItem key={reason} value={reason}>{reason}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    )
};

export default SelectReportReason;