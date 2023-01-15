import React from 'react';
import { Menu } from 'antd';
import { options } from './options';
import { breadcrumbPath } from '../store/reducers/breadcrumb';
import { useDispatch } from 'react-redux';
import { setActualSentenceIndex, setEarnedPoints } from '../store/reducers/carousel';
import { useTheme } from '../Hooks';


const SiderMenu = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  
  return (
    <React.Fragment>
      <Menu
        theme={theme}
        defaultSelectedKeys={['1']}
        mode="inline"
        items={options}
        onSelect={({ keyPath }: { keyPath: string[] }) => {
          dispatch(breadcrumbPath(keyPath.reverse()));
          dispatch(setActualSentenceIndex(0));
          dispatch(setEarnedPoints(0));
        }}
      />
    </React.Fragment>
  );
};

export default SiderMenu;
