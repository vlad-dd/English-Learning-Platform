import styled from "styled-components";
import { Tag } from "antd";
import { Avatar, List, IconButton } from "@mui/material";
import RuleIcon from '@mui/icons-material/Rule';
import ListItem from '@mui/material/ListItem';

export const StyledSectionCommentsWrapper = styled.div``;

export const StyledCommentsHeader= styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid white;
  margin-top: 25px;
`;

export const StyledCommentsCount = styled.div``;

export const StyledCount = styled.div``;

export const StyledRuleSection = styled.div``;

export const StyledEditor = styled.div`
  display: flex;
  margin: 16px 0;
`;

export const StyledEditorAvatar = styled(Avatar)`
  border: 1px solid white;
`

export const EditorContainer = styled.div`
  display: flex;
  margin: 0 16px;
  position: relative;
  overflow: scroll;
`;

export const StyledButtonInnerHTML = styled.span``;

export const StyledList = styled(List)`
  overflow: scroll;
`;

export const ListItemTextBody = styled.div`
  display: flex;
  height: 20px;
`;

export const SendersNickname = styled.p`
   font-weight: 600;
`;

export const StyledListItem = styled(ListItem)`
  margin: 15px 0;
`;

export const StyledCommentAvatar = styled(Avatar)`
  border: 1px solid purple;
  margin-bottom: 18px;
`;

export const StyledDateTag = styled(Tag)`
  margin-left: 10px;
`;

export const StyledCommentContainer = styled.div``;

export const StyledComment = styled.div`
  color: #ffffff;
  margin-top: 10px;
  padding: 5px;
`;

export const StyledCommentReactions = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
`;

export const StyledIconButton = styled(IconButton)`
  margin-right: 30px;
`;

export const StyledRuleIcon = styled(RuleIcon)`
  cursor: pointer;
  margin-right: 15px;
  border-bottom: 1px solid purple;
`;

export const StyledCommentRulesWrapper = styled.div``;