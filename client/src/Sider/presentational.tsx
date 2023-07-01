import SiderMenu from '../Menu/presentational';
import { useBoolean } from '../Hooks';
import CompanyLogo from './company-logo';
import './index.css';
import { SIDER_MENU_DATA_TEST_ID } from './constants';
import * as Styled from './styled';

const SiderComponent = () => {
  const [isCollapsed, setCollapsed] = useBoolean(false);
  return (
      <Styled.StyledLayoutSider
        data-testid={SIDER_MENU_DATA_TEST_ID}
        collapsible
        collapsed={isCollapsed}
        onCollapse={() => setCollapsed()}
      >
        <Styled.LogoContainer>
          <CompanyLogo />
        </Styled.LogoContainer>
        <SiderMenu  />
      </Styled.StyledLayoutSider>
  );
};

export default SiderComponent;
