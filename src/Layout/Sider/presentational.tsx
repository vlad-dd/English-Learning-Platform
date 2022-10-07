import React, { useState } from "react";
import { Layout } from "antd";
import { Image } from "../../Сommon/index";
import companyLogo from "../../logo.svg";
import * as Styled from "./styled";
import SiderMenu from "../Menu/presentational";
import './index.css';

const { Sider } = Layout;

const SiderComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <React.Fragment>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Styled.LogoContainer>
          <Image
            url={companyLogo}
            height="110px"
            width="170px"
            marginLeft="15px"
          />
        </Styled.LogoContainer>
        <SiderMenu  />
      </Sider>
    </React.Fragment>
  );
};

export default SiderComponent;
