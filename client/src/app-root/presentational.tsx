import { Outlet } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { Layout } from 'antd';
import SiderComponent from '../Sider/presentational';
import Header from '../Header/presentational';
import { APPLICATION_ROOT } from '../translations/constants';
import ModalRoot from './modals';
import { APPLICATION_LAYOUT_DATA_TEST_ID, AUTHOR } from './constants';
import { StyledLayout, StyledContent, StyledFooter } from '../styled';

const ApplicationRoot = () => {
  return (
    <StyledLayout data-testid={APPLICATION_LAYOUT_DATA_TEST_ID}>
      <ModalRoot />
      <SiderComponent />
      <Layout>
        <Header />
        <StyledContent>
          <Outlet />
        </StyledContent>
        <StyledFooter>
          <FormattedMessage id={APPLICATION_ROOT.FOOTER_AUTHOR_INFORMATION} /> {AUTHOR}
        </StyledFooter>
      </Layout>
    </StyledLayout>
  );
};

export default ApplicationRoot;
