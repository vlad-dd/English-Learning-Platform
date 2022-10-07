import React from "react";
import { Menu } from "antd";
import { options } from "../Sider/options";
import { breadcrumbPath } from "../../store/reducers/breadcrumb";
import { useDispatch } from "react-redux";

const SiderMenu = () => {
  const dispatch = useDispatch()
  return (
    <React.Fragment>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={options}
        onSelect={(item) => dispatch(breadcrumbPath(item.keyPath.reverse()))}
      />
    </React.Fragment>
  );
};

export default SiderMenu;
