import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Tooltip } from "antd";
import { closeSendReportModal } from "../../store/reducers/send-report-modal";
import { reportModalState } from "../../store/selectors";
import { SendReportForm, ReportResult, ReportServiceIcon } from "./components";
import { REPORT_SERVICE_MODAL_DATA_TEST_ID, TOOLTIP_TITLE } from "../constants";
import { SUPPORT_TEAM } from "../../translations/constants";
import { StyledModalTitle, StyledSendReportWrapper } from "./styled";

const SendReportModal = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(reportModalState);
  const [isSubmitted, setSubmitted] = useState(false);
  return (
    <StyledSendReportWrapper>
      <Tooltip title={TOOLTIP_TITLE}>
        <Modal
          data-testid={REPORT_SERVICE_MODAL_DATA_TEST_ID}
          title={
            <StyledModalTitle>
              <FormattedMessage id={SUPPORT_TEAM.SEND_REPORT_MODAL_TITLE} />
            </StyledModalTitle>}
          open={isOpen}
          onOk={() => dispatch(closeSendReportModal())}
          onCancel={() => dispatch(closeSendReportModal())}
        >
          {isSubmitted && <ReportResult />}
          <SendReportForm
            isSubmitted={isSubmitted}
            setSubmitted={setSubmitted}
          />
        </Modal>
        <ReportServiceIcon />
      </Tooltip>
    </StyledSendReportWrapper>
  )
}

export default SendReportModal;
