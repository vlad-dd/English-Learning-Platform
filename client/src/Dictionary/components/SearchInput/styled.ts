import styled from "styled-components";
import { Input, Space } from "antd";

const { Search } = Input;

export const StyledSpace = styled(Space)`
  display: flex;
  align-items: center;
`;

export const StyledSearch = styled(Search)`
  padding-top: 30px;
  width: 800px;
`;
