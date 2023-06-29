import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Menu } from 'antd';
import { setActualSentenceIndex, setEarnedPoints } from '../store/reducers/carousel';
import { breadcrumbPath } from '../store/reducers/bread-crumb';
import { options } from './options';
import { IKeyPath } from './types';
import { MENU_OPTIONS_DATA_TEST_ID } from './constants';

const SiderMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
      <Menu
        data-testid={MENU_OPTIONS_DATA_TEST_ID}
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="dark"
        items={options}
        onSelect={({ keyPath }: IKeyPath) => {
          navigate(`/${keyPath.reverse().join('/')}`);
          dispatch(breadcrumbPath(keyPath.reverse()));
          dispatch(setActualSentenceIndex(0));
          dispatch(setEarnedPoints(0));
        }}
      />
  );
};

export default SiderMenu;
