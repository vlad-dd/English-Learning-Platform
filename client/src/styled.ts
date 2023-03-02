import styled from 'styled-components';
import { Layout } from 'antd';

const { Content, Footer } = Layout;

export const StyledLayout = styled(Layout)`
  min-height: 100vh;
  @media (max-width: 680px) {
    .ant-layout-sider {
      display: none;
    }
  }
  @media screen and (min-width: 680px) {
    .burger-menu {
      display: none;
    }
  }
`;

export const StyledContent = styled(Content)`
  margin: 0 16px;
`;

export const StyledDefault = styled.div``;

export const StyledFooter = styled(Footer)`
  text-align: center;
`;
