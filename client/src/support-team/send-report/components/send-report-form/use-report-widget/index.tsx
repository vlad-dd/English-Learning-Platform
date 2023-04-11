import { StyledInputLengthError } from '../../../styled';
import { useState } from "react"
import { MAX_TEXT_AREA_LENGTH, MIN_TEXT_AREA_LENGTH } from "../../../../constants";

const useReportWidget = () => {
    const [touchedByMouse, setTouchedByMouse] = useState(false);
    const [report, setReport] = useState<Record<string, string>>({ application: '', description: '' });
    
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
        setTouchedByMouse
    };
};

export default useReportWidget;
