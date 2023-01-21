import React from 'react';
import { Layout } from 'antd';
import SiderComponent from '../Sider/presentational';
import Header from '../Header/presentational';
import { StyledLayout, StyledContent, StyledFooter } from '../styled';

const ApplicationRoot = ({ children }: { children: JSX.Element }) => {

  return (
    <StyledLayout>
      <SiderComponent />
      <Layout>
        <Header />
        <StyledContent>
          {children}
        </StyledContent>
        <StyledFooter>
          English Learning Platform ©2022 Created by vsyrotiuk
        </StyledFooter>
      </Layout>
    </StyledLayout>
  );
};

export default ApplicationRoot;
