import { useDispatch } from "react-redux";
import { CustomerServiceOutlined } from '@ant-design/icons';
import { openSendReportModal } from "../../../../store/reducers/send-report-modal";
import { REPORT_SERVICE_ICON_DATA_TEST_ID } from "../../../constants";
import { StyledServiceButton } from "../../styled";

const ReportServiceIcon = () => {
    const dispatch = useDispatch();
    return (
        <StyledServiceButton
            data-testid={REPORT_SERVICE_ICON_DATA_TEST_ID}
            onClick={() => dispatch(openSendReportModal())}
        >
            <CustomerServiceOutlined />
        </StyledServiceButton>
    )

}

export default ReportServiceIcon;