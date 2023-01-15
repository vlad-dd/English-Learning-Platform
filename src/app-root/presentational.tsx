import React from 'react';
import { Layout } from 'antd';
import SiderComponent from '../Sider/presentational';
import Header from '../Header/presentational';
import { StyledLayout, StyledContent, StyledFooter } from '../styled';
import { useApplication } from './use-application';
import DefaultPage from '../DefaultPage/presentational';

const ApplicationRoot = () => {

  const { application } = useApplication();

  return (
    <StyledLayout>
      <SiderComponent />
      <Layout>
        <Header />
        <StyledContent>
          {application ?? <DefaultPage />}
        </StyledContent>
        <StyledFooter>
          English Learning Platform ©2022 Created by vsyrotiuk
        </StyledFooter>
      </Layout>
    </StyledLayout>
  );
};

export default ApplicationRoot;
