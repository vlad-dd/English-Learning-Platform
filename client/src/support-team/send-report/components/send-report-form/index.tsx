import React, { useLayoutEffect, useState } from "react";
import {
    StyledForm,
    SubmitButtonWrapper
} from "../../styled";
import { Form, Select } from "antd";
import { ELP_APPLICATIONS, MAX_TEXT_AREA_LENGTH, MIN_TEXT_AREA_LENGTH } from "../../../constants";
import TextArea from "antd/lib/input/TextArea";
import useReportConfig from "./use-report-config";
import { Button } from "@mui/material";
//@ts-ignore
import SendIcon from '@mui/icons-material/Send';

const SendReportForm = ({ isSubmitted, setSubmitted }: any) => {
    const [touchedByMouse, setTouchedByMouse] = useState(false);
    const { report, isDisabled, minLengthError, maxLengthError, selectApplication, handleTextArea } = useReportConfig();

    const isVisible = (!isDisabled && !isSubmitted);

    return (
        <>
            <StyledForm
                labelCol={{ span: 6 }}
                hidden={isSubmitted}
                wrapperCol={{ span: 12 }}>
                <Form.Item required label="Was found in">
                    <Select onSelect={selectApplication} options={ELP_APPLICATIONS} />
                </Form.Item>
                <Form.Item required label="Description">
                    <TextArea
                        onBlur={() => setTouchedByMouse(true)}
                        maxLength={MAX_TEXT_AREA_LENGTH}
                        minLength={MIN_TEXT_AREA_LENGTH}
                        onChange={({ target: { value } }) => handleTextArea(value)}
                    />
                    {minLengthError && touchedByMouse ? <p style={{ color: 'red' }}>You should write at least 10 symbols!</p> : ''}
                    {maxLengthError ? <p style={{ color: 'red' }}>You have reached max of symbols!</p> : ''}
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
                {/* <StyledSubmitButton
                    {...(isVisible && { style: { background: "#1890ff" } })}
                    disabled={isDisabled || isSubmitted}
                    onClick={() => {
                        console.log('Your report was submitted!', report)
                        setSubmitted(true)
                    }}>

                    <StyledSubmitInnerHTML>
                        Submit
                    </StyledSubmitInnerHTML>
                </StyledSubmitButton> */}
            </SubmitButtonWrapper>
        </>
    );
};

export default SendReportForm;

//TODO this component clean up