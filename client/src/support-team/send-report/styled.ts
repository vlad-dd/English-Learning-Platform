import styled from "styled-components";
import { Button, Form } from "antd";

export const StyledSendReportWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const StyledServiceButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1890ff;
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;

export const SubmitButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const StyledSubmitButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSubmitInnerHTML = styled.span`
  color: white;
`;

export const StyledForm = styled(Form)`
  max-width: 600;
`;

export const StyledInputLengthError = styled.p`
  color: red;
`;

export const StyledInputLengthContainer = styled.div``;

export const StyledModalTitle = styled.h3``;