import { FormattedMessage } from "react-intl";
import { Form, Select } from "antd";
import { LoadingButton } from "@mui/lab";
import SendIcon from '@mui/icons-material/Send';
import TextArea from "antd/lib/input/TextArea";
import { ISendReportForm } from "../../../types";
import { SUPPORT_TEAM } from "../../../../translations/constants";
import useReportWidget from "./use-report-widget";
import {
    ELP_APPLICATIONS,
    MAX_TEXT_AREA_LENGTH,
    MIN_TEXT_AREA_LENGTH,
    REPORT_FORM_LABELS,
    SEND_REPORT_FORM_DATA_TEST_ID,
    SEND_REPORT_MAX_LENGTH_GATE_DATA_TEST_ID,
    SEND_REPORT_MIN_LENGTH_GATE_DATA_TEST_ID,
    SEND_REPORT_SELECT_REASON_DATA_TEST_ID,
    SEND_REPORT_SUBMIT_BUTTON_DATA_TEST_ID,
    SEND_REPORT_TEXTAREA_DATA_TEST_ID
} from "../../../constants";
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
                data-testid={SEND_REPORT_FORM_DATA_TEST_ID}
                labelCol={{ span: 6 }}
                hidden={isSubmitted}
                wrapperCol={{ span: 12 }}>
                <Item required label={REPORT_FORM_LABELS.FOUND_IN}>
                    <Select
                        data-testid={SEND_REPORT_SELECT_REASON_DATA_TEST_ID}
                        onSelect={selectApplication}
                        options={ELP_APPLICATIONS}
                    />
                </Item>
                <Item required label={REPORT_FORM_LABELS.DESCRIPTION}>
                    <TextArea
                        data-testid={SEND_REPORT_TEXTAREA_DATA_TEST_ID}
                        onBlur={() => setTouchedByMouse(true)}
                        maxLength={MAX_TEXT_AREA_LENGTH}
                        minLength={MIN_TEXT_AREA_LENGTH}
                        onChange={({ target: { value } }) => handleTextArea(value)}
                    />
                    <StyledInputLengthContainer data-testid={SEND_REPORT_MIN_LENGTH_GATE_DATA_TEST_ID}>
                        {minLengthGate}
                    </StyledInputLengthContainer>

                    <StyledInputLengthContainer data-testid={SEND_REPORT_MAX_LENGTH_GATE_DATA_TEST_ID}>
                        {maxLengthGate}
                    </StyledInputLengthContainer>
                </Item>
            </StyledForm>

            <SubmitButtonWrapper>
                <LoadingButton
                    data-testid={SEND_REPORT_SUBMIT_BUTTON_DATA_TEST_ID}
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
                    <FormattedMessage id={SUPPORT_TEAM.SEND_REPORT_SUBMIT_BUTTON} />
                </LoadingButton>
            </SubmitButtonWrapper>
        </>
    );
};

export default SendReportForm;
