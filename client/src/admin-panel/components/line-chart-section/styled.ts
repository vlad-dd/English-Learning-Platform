import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledLineChartSectionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 50vh;
  margin: 50px;
`;

export const StyledReportBlock = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid white;
  padding: 15px;
  width: 25vw;
  margin-bottom: 15px;
`;

export const StyledReportBlockSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledApplicationName = styled.span``;

export const StyledDate = styled.span``;

export const StyledFileLink = styled.a``;

export const StyledLineChartReports = styled(Button)`
  border: 1px solid purple;
  width: 100%;
  display: flex;
  gap: 10px;
`;

export const StyledParticularLineChartReport = styled(Button)`
  height: 30px;
  display: flex;
  gap: 10px;
  border: 1px solid purple;
  color: white;
`;
