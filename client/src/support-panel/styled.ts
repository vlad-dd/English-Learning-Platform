import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid"
import ButtonGroup from '@mui/material/ButtonGroup';

export const StyledSupportPanelContainer = styled.div``;

export const StyledSupportPanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledDataGrid = styled(DataGrid)`
  margin: 15px;
`;

export const StyledButtonGroup = styled(ButtonGroup)`
  margin-right: 3vw;
`;