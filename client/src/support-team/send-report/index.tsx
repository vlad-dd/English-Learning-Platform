import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Tooltip } from "antd";
import { closeSendReportModal } from "../../store/reducers/send-report";
import { reportModalState } from "../../store/selectors";
import { SendReportForm, ReportResult, ReportServiceIcon } from "./components";
import { StyledSendReportWrapper } from "./styled";

const SendReportModal = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(reportModalState);
  const [isSubmitted, setSubmitted] = useState(false);
  return (
    <StyledSendReportWrapper>
      <Tooltip title="Report about the Problem">
        <Modal
          title={<h3>Report about the Problem👷‍♂️</h3>}
          open={isOpen}
          onOk={() => dispatch(closeSendReportModal())}
          onCancel={() => dispatch(closeSendReportModal())}
        >
          {isSubmitted && <ReportResult />}
          <SendReportForm
            isSubmitted={isSubmitted}
            setSubmitted={setSubmitted} />
        </Modal>
        <ReportServiceIcon />
      </Tooltip>
    </StyledSendReportWrapper>
  )
}

export default SendReportModal;
