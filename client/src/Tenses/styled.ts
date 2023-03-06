import { Table, Alert } from "antd";
import styled from "styled-components";
import { DEVICE_MAXIMUM } from "../mobile-view";
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
      font-size: 0.779rem;
    }
  }

  @media ${DEVICE_MAXIMUM.tablet} {
    .ant-table-cell {
      font-size: 0.769rem;
    }
  }

  @media (max-width: 663px) {
    .ant-table-cell {
      font-size: 0.559rem;
    }
  }

  }
`;

export const StyledAlert = styled(Alert)`
@media (max-width: 900px) {
  font-size: 0.76rem;
}

@media ${DEVICE_MAXIMUM.tablet} {
  font-size: 0.75rem;
}

@media (max-width: 623px) {
  font-size: 0.7rem;

}
`;