import styled from "styled-components";
import { Button } from "@mui/material";

export const AdminPanelHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledButtonBody = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const StyledGeneralApplicationReport = styled(Button)`
  border: 1px solid purple;
  height: 40px;
  margin: 40px;
`;
