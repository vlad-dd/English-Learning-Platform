import styled from "styled-components";
import { Space, Tag } from "antd";

export const StyledSpace = styled(Space)`
  display: flex;
  flex-direction: row-reverse;
  padding-top: 15px;
`;

export const StyledSocialMediaTag = styled(Tag)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledMedia = styled.p`
  margin: 3px;
`;
