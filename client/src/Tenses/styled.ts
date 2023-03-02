import { Table, Alert } from "antd";
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
  overflow: scroll;
  padding-bottom: 25px;

  @media (max-width: 830px) {
    .ant-table-cell {
      font-size: 0.759rem;
    }
  }

  @media (max-width: 663px) {
    .ant-table-cell {
      font-size: 0.559rem;
    }
  }

  @media (max-width: 575px) {
    .ant-table-cell {
      font-size: 0.459rem;
    }
  }

  @media (max-width: 525px) {
    .ant-table-cell {
      font-size: 0.43rem;
    }
  }
`;

export const StyledAlert = styled(Alert)`
@media (max-width: 900px) {
  font-size: 0.759rem;
}

@media (max-width: 623px) {
  font-size: 0.7rem;

}
`;


//for responsive UI
//https://jsramblings.com/how-to-use-media-queries-with-styled-components