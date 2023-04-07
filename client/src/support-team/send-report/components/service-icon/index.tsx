import React from "react";
import { useDispatch } from "react-redux";
import { CustomerServiceOutlined } from '@ant-design/icons';
import { openSendReportModal } from "../../../../store/reducers/send-report";
import { StyledServiceButton } from "../../styled";

const ReportServiceIcon = () => {
    const dispatch = useDispatch();
    return (
        <StyledServiceButton
            data-testid="report-service-icon"
            onClick={() => dispatch(openSendReportModal())}
            style={{ background: '#1890ff' }}>
            <CustomerServiceOutlined style={{ color: "white" }} />
        </StyledServiceButton>
    )

}

export default ReportServiceIcon;