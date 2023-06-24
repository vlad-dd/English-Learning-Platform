import { memo } from "react";
import { FormattedMessage } from "react-intl";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ISelectReportReason } from "../../types";
import { TENSES_PAGE } from "../../../../translations/constants";
import {
    POLICY_RULES,
    REASON_SELECTOR_DATA_TEST_ID,
    SELECT_REASON_BOX_DATA_TEST_ID,
    SELECT_REASON_INPUT_LABEL_ID,
    SELECT_REPORT_REASON_LABEL
} from "../../constants";
import { StyledBox } from "../../styled";

const SelectReportReason = memo(({ selectedReason, setSelectedReason }: ISelectReportReason) => {
    return (
        <StyledBox data-testid={SELECT_REASON_BOX_DATA_TEST_ID} sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id={SELECT_REASON_INPUT_LABEL_ID}>
                    <FormattedMessage id={TENSES_PAGE.REPORT_DIALOG_REASON_INPUT_LABEL} />
                </InputLabel>
                <Select
                    data-testid={REASON_SELECTOR_DATA_TEST_ID}
                    label={SELECT_REPORT_REASON_LABEL}
                    value={selectedReason}
                    onChange={({ target: { value } }) => setSelectedReason(value)}
                >
                    {POLICY_RULES.map((reason) => <MenuItem key={reason} value={reason}>{reason}</MenuItem>)}
                </Select>
            </FormControl>
        </StyledBox>
    )
});

export default SelectReportReason;