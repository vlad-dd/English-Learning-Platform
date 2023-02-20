import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router';
import SiderComponent from '../Sider/presentational';
import Header from '../Header/presentational';
import { StyledLayout, StyledContent, StyledFooter } from '../styled';

const ApplicationRoot = () => {
  return (
    <StyledLayout data-testid='application-layout'>
      <SiderComponent />
      <Layout>
        <Header />
        <StyledContent>
          <Outlet />
        </StyledContent>
        <StyledFooter>
          English Learning Platform ©2022 Created by vsyrotiuk
        </StyledFooter>
      </Layout>
    </StyledLayout>
  );
};

export default ApplicationRoot;
