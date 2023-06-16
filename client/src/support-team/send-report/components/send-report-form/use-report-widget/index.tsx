import { useState } from "react"
import { useMutation } from "@apollo/client";
import { SEND_APPLICATION_REPORT_MUTATION } from "../../../../graphql";
import { IReport, ReportWidget } from "../../../../types";
import { MAX_TEXT_AREA_LENGTH, MIN_TEXT_AREA_LENGTH } from "../../../../constants";
import { StyledInputLengthError } from '../../../styled';

const useReportWidget = (): ReportWidget => {
    const [touchedByMouse, setTouchedByMouse] = useState(false);
    const [report, setReport] = useState<IReport>({ application: '', description: '' });
    const [sendApplicationReport, { loading: isLoading, error }] = useMutation(SEND_APPLICATION_REPORT_MUTATION);

    const minLengthError = report.description.length < MIN_TEXT_AREA_LENGTH;
    const maxLengthError = report.description.length === MAX_TEXT_AREA_LENGTH;

    const minLengthGate = (minLengthError && touchedByMouse) ? <StyledInputLengthError>You should write at least 10 symbols!</StyledInputLengthError> : '';
    const maxLengthGate = maxLengthError ? <StyledInputLengthError>You have reached max of symbols!</StyledInputLengthError> : '';

    const isDisabled = (report.application === '' && report.description === '')
        || (report.application === '')
        || (report.description === '')
        || minLengthError;

    const selectApplication = (application: string) => {
        setReport({ ...report, application })
    };

    const handleTextArea = (description: string) => {
        setReport({ ...report, description })
    };

    const sendReport = () => {
        const { application, description } = report;
        sendApplicationReport({ variables: { application, description } });
    };

    return {
        report,
        setReport,
        isDisabled,
        minLengthError,
        maxLengthError,
        minLengthGate,
        maxLengthGate,
        selectApplication,
        handleTextArea,
        setTouchedByMouse,
        sendReport,
        isLoading,
        error
    };
};

export default useReportWidget;
