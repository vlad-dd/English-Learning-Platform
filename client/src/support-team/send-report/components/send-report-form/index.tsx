import React from "react";
import { Form, Select } from "antd";
import { LoadingButton } from "@mui/lab";
import SendIcon from '@mui/icons-material/Send';
import TextArea from "antd/lib/input/TextArea";
import useReportWidget from "./use-report-widget";
import { ISendReportForm } from "../../../types";
import { ELP_APPLICATIONS, MAX_TEXT_AREA_LENGTH, MIN_TEXT_AREA_LENGTH, REPORT_FORM_LABELS } from "../../../constants";
import {
    StyledForm,
    StyledInputLengthContainer,
    SubmitButtonWrapper
} from "../../styled";

const { Item } = Form;

const SendReportForm = ({ isSubmitted, setSubmitted }: ISendReportForm) => {
    const {
        isDisabled,
        minLengthGate,
        maxLengthGate,
        selectApplication,
        handleTextArea,
        setTouchedByMouse,
        sendReport,
        isLoading
    } = useReportWidget();

    const isVisible = (!isDisabled && !isSubmitted);

    return (
        <>
            <StyledForm
                data-testid="send-report-form"
                labelCol={{ span: 6 }}
                hidden={isSubmitted}
                wrapperCol={{ span: 12 }}>
                <Item required label={REPORT_FORM_LABELS.FOUND_IN}>
                    <Select
                        data-testid="send-report-select-reason"
                        onSelect={selectApplication}
                        options={ELP_APPLICATIONS}
                    />
                </Item>
                <Item required label={REPORT_FORM_LABELS.DESCRIPTION}>
                    <TextArea
                        data-testid="send-report-textarea"
                        onBlur={() => setTouchedByMouse(true)}
                        maxLength={MAX_TEXT_AREA_LENGTH}
                        minLength={MIN_TEXT_AREA_LENGTH}
                        onChange={({ target: { value } }) => handleTextArea(value)}
                    />
                    <StyledInputLengthContainer data-testid="send-report-min-length-gate">
                        {minLengthGate}
                    </StyledInputLengthContainer>

                    <StyledInputLengthContainer data-testid="send-report-max-length-gate">
                        {maxLengthGate}
                    </StyledInputLengthContainer>
                </Item>
            </StyledForm>

            <SubmitButtonWrapper>
                <LoadingButton
                    data-testid="send-report-submit"
                    variant="contained"
                    endIcon={<SendIcon />}
                    loading={isLoading}
                    {...(isVisible && { style: { background: "#1890ff" } })}
                    disabled={isDisabled}
                    hidden={isSubmitted}
                    onClick={() => {
                        sendReport();
                        !isLoading && setSubmitted(true)
                    }}
                >
                    Send
                </LoadingButton>
            </SubmitButtonWrapper>
        </>
    );
};

export default SendReportForm;
