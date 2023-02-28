import { Table } from "antd";
import styled from "styled-components";
import { Title } from "../Сommon";

export const ContentSection = styled.div`
  background: #fbfcfa;
  padding: 24px;
  min-height: 360px;
`;

export const StyledTitle = styled(Title)`
  padding-top: 25px;
`;

export const StyledTable = styled(Table)`
  padding-bottom: 25px;
`;


//for responsive UI
//https://jsramblings.com/how-to-use-media-queries-with-styled-components