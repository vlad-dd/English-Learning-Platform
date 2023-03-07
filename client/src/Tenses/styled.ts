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

  @media ${DEVICE_MAXIMUM.tablet} {
    .ant-table-cell {
      font-size: 0.769rem;
    }
  }

  @media ${DEVICE_MAXIMUM.mobileL} {
    .ant-table-cell {
      font-size: 0.649rem;
    }
  }

  }
`;

export const StyledAlert = styled(Alert)`

@media ${DEVICE_MAXIMUM.tablet} {
  font-size: 0.75rem;
}

@media ${DEVICE_MAXIMUM.mobileL} {
  font-size: 0.7rem;
}
`;