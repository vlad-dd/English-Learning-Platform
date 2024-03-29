import styled from 'styled-components';
import { Layout } from 'antd';
import { DEVICE_MAXIMUM } from './mobile-view';

const { Content, Footer } = Layout;

export const StyledLayout = styled(Layout)`
  min-height: 100vh;
  @media ${DEVICE_MAXIMUM.tablet} {
    .ant-layout-sider {
      display: none;
    }
  }
  
  @media screen and (min-width: 769px) {
    .burger-menu {
      display: none;
    }
  }
`;

export const StyledContent = styled(Content)`
`;

//PREVIOUS
// export const StyledContent = styled(Content)`
//   margin: 0 16px;
// `;

export const StyledDefault = styled.div``;

export const StyledFooter = styled(Footer)`
  text-align: center;
`;
