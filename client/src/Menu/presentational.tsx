import React from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router';
import { options } from './options';
import { breadcrumbPath } from '../store/reducers/bread-crumb';
import { useDispatch } from 'react-redux';
import { setActualSentenceIndex, setEarnedPoints } from '../store/reducers/carousel';
import { useTheme } from '../Hooks';


const SiderMenu = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const navigate = useNavigate();
  
  return (
    <React.Fragment>
      <Menu
        data-testid="options-menu"
        theme={theme}
        defaultSelectedKeys={['1']}
        mode="inline"
        items={options}
        onSelect={({ keyPath }: { keyPath: string[] }) => {
          navigate(`/${keyPath.reverse().join('/')}`)
          dispatch(breadcrumbPath(keyPath.reverse()));
          dispatch(setActualSentenceIndex(0));
          dispatch(setEarnedPoints(0));
        }}
      />
    </React.Fragment>
  );
};

export default SiderMenu;
