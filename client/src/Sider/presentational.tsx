import { Layout } from 'antd';
import * as Styled from './styled';
import SiderMenu from '../Menu/presentational';
import { useBoolean } from '../Hooks';
import './index.css';
import CompanyLogo from './company-logo';

const { Sider } = Layout;

const SiderComponent = () => {
  const [isCollapsed, setCollapsed] = useBoolean(false);
  return (
      <Sider
        data-testid="sider-menu"
        collapsible
        style={{ background: "#010a12" }}
        collapsed={isCollapsed}
        onCollapse={() => setCollapsed()}
      >
        <Styled.LogoContainer>
          <CompanyLogo />
        </Styled.LogoContainer>
        <SiderMenu  />
      </Sider>
  );
};

export default SiderComponent;
