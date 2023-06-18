import styled from "styled-components";
import { Box, DialogActions } from '@mui/material';
import { Tag } from "antd";

export const StyledUserProfileBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  background: white;
  transform: translate(-50%, -50%);
  border: 2px solid #000;
  box-shadow: 24;
  padding: 30px;
`;

export const StyledUserProfileWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 55px;
`;

export const StyledMainInformationBlock = styled.div`
  height: 100%;
  display: flex;
  width: 400px;
  background: whitesmoke;
`;

export const StyledUserAvatarWrapper = styled.div`
  margin: 25px;
`;

export const StyledInformationTag = styled.div`
  padding-top: 25px;
`;

export const StyledCommunicationBlockWrapper = styled.div`
  height: 100%;
  width: 400px;
  background: whitesmoke;
`;

export const StyledUserDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
`;

export const StyledUserNickname = styled.div`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
`;

export const StyledUserProfileActionsWrapper = styled.div`
  display: flex;
  justfiy-content: space-between;
  gap: 10px;
  padding: 15px 25px 15px 25px;
`;

export const StyledActionText = styled.span`
  margin-right: 5px;
`;

export const StyledProfileTabsWrapper = styled.div`
  padding: 25px;
`
export const StyledDialogActions = styled(DialogActions)`
  background: whitesmoke;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const StyledTabLabelContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTabLabel = styled.span`
  margin-right: 5px;
`;

export const StyledUserProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledActivityTag = styled(Tag)`
  border-radius: 50px;
  font-size: 0.8rem;
`;

export const StyledUserProgressLabel = styled.span``;
