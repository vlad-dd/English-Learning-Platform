import styled from "styled-components";
import { Card, Typography } from "@mui/material"

export const StyledPieChartSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  position: relative;
  top: 20px;
`;

export const StyledPieCard = styled(Card)`
  display: flex;
  border: 1px solid white;
`;

export const StyledTypography= styled(Typography)`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const StyledTotalUsersContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 8px;
`;