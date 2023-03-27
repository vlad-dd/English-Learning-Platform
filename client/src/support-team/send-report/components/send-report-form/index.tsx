import React, { useState } from "react";
import { Form, Select } from "antd";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import TextArea from "antd/lib/input/TextArea";
import useReportConfig from "./use-report-config";
import { ELP_APPLICATIONS, MAX_TEXT_AREA_LENGTH, MIN_TEXT_AREA_LENGTH, REPORT_FORM_LABELS } from "../../../constants";
import {
    StyledForm,
    StyledInputLengthContainer,
    StyledInputLengthError,
    SubmitButtonWrapper
} from "../../styled";

const SendReportForm = ({ isSubmitted, setSubmitted }: any) => {
    const [touchedByMouse, setTouchedByMouse] = useState(false);
    const { report, isDisabled, minLengthError, maxLengthError, selectApplication, handleTextArea } = useReportConfig();

    const isVisible = (!isDisabled && !isSubmitted);

    const minLengthGate = (minLengthError && touchedByMouse) ? <StyledInputLengthError>You should write at least 10 symbols!</StyledInputLengthError> : '';
    const maxLengthGate = maxLengthError ? <StyledInputLengthError>You have reached max of symbols!</StyledInputLengthError> : '';

    return (
        <>
            <StyledForm
                labelCol={{ span: 6 }}
                hidden={isSubmitted}
                wrapperCol={{ span: 12 }}>
                <Form.Item required label={REPORT_FORM_LABELS.FOUND_IN}>
                    <Select onSelect={selectApplication} options={ELP_APPLICATIONS} />
                </Form.Item>
                <Form.Item required label={REPORT_FORM_LABELS.DESCRIPTION}>
                    <TextArea
                        onBlur={() => setTouchedByMouse(true)}
                        maxLength={MAX_TEXT_AREA_LENGTH}
                        minLength={MIN_TEXT_AREA_LENGTH}
                        onChange={({ target: { value } }) => handleTextArea(value)}
                    />
                    <StyledInputLengthContainer>
                        {minLengthGate}
                    </StyledInputLengthContainer>

                    <StyledInputLengthContainer>
                        {maxLengthGate}
                    </StyledInputLengthContainer>
                </Form.Item>
            </StyledForm>

            <SubmitButtonWrapper>
                <Button variant="contained" endIcon={<SendIcon />}
                    {...(isVisible && { style: { background: "#1890ff" } })}
                    disabled={isDisabled}
                    hidden={isSubmitted}
                    onClick={() => {
                        console.log('Your report was submitted!', report)
                        setSubmitted(true)
                    }}>
                    Send
                </Button>
            </SubmitButtonWrapper>
        </>
    );
};

export default SendReportForm;
