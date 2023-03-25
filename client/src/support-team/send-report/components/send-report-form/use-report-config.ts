import { useState } from "react"
import { MAX_TEXT_AREA_LENGTH, MIN_TEXT_AREA_LENGTH } from "../../../constants";

const useReportConfig = () => {
    const [report, setReport] = useState<Record<string, string>>({ application: '', description: '' });
    
    const minLengthError = report.description.length < MIN_TEXT_AREA_LENGTH;
    const maxLengthError = report.description.length === MAX_TEXT_AREA_LENGTH;

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
        selectApplication,
        handleTextArea
    };
};

export default useReportConfig;
