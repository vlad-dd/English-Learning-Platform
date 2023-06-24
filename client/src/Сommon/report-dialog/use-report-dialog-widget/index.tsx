import { useEffect, useState } from "react";

export const useReportDialogWidget = (isOpen: boolean) => {
    const [selectedReason, setSelectedReason] = useState('');
    const [additionalInformation, setAdditionalInformation] = useState('');

    useEffect(() => {
        setSelectedReason("");
    }, [isOpen]);

    return {
        selectedReason,
        additionalInformation,
        setSelectedReason,
        setAdditionalInformation
    };
};