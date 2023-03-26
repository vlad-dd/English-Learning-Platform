import { Table, Alert } from "antd";
import styled from "styled-components";
import { DEVICE_MAXIMUM } from "../mobile-view";
import { Title } from "../Сommon";

export const ContentSection = styled.div`
  background: rgb(0, 30, 60);
  padding: 24px;
  min-height: 360px;
`;

//PREVIOUS
// export const ContentSection = styled.div`
//   background: #fbfcfa;
//   padding: 24px;
//   min-height: 360px;
// `;

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

  @media ${DEVICE_MAXIMUM.mobileM} {
    .ant-table-cell {
      font-size: 0.659rem;
    }
  }

  @media ${DEVICE_MAXIMUM.mobileS} {
    .ant-table-cell {
      font-size: 0.669rem;
    }
  }

`;

export const StyledAlert = styled(Alert)`

@media ${DEVICE_MAXIMUM.tablet} {
  font-size: 0.75rem;
}

@media ${DEVICE_MAXIMUM.mobileL} {
  font-size: 0.74rem;
}

@media ${DEVICE_MAXIMUM.mobileM} {
  font-size: 0.73rem;
}

@media ${DEVICE_MAXIMUM.mobileS} {
  font-size: 0.72rem;
}
`;