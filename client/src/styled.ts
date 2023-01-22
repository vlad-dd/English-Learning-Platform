import styled from 'styled-components';
import { Layout } from 'antd';

const { Content, Footer } = Layout;

export const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

export const StyledContent = styled(Content)`
  margin: 0 16px;
`;

export const StyledDefault = styled.div``;

export const StyledFooter = styled(Footer)`
  text-align: center;
`;