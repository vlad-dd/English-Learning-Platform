import React from 'react';
import { Layout } from 'antd';
import * as Styled from './styled';
import SiderMenu from '../Menu/presentational';
import { useBoolean, useTheme } from '../Hooks';
import './index.css';
import CompanyLogo from './company-logo';

const { Sider } = Layout;

const SiderComponent = () => {
  const [isCollapsed, setCollapsed] = useBoolean(false);
  const { theme, defaultTheme } = useTheme();
  return (
      <Sider
        data-testid="sider-menu"
        theme={theme}
        collapsible
        collapsed={isCollapsed}
        onCollapse={() => setCollapsed()}
      >
        <Styled.LogoContainer>
          <CompanyLogo defaultTheme={defaultTheme} />
        </Styled.LogoContainer>
        <SiderMenu  />
      </Sider>
  );
};

export default SiderComponent;
