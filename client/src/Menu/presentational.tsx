import { Menu } from 'antd';
import { useNavigate } from 'react-router';
import { options } from './options';
import { breadcrumbPath } from '../store/reducers/bread-crumb';
import { useDispatch } from 'react-redux';
import { setActualSentenceIndex, setEarnedPoints } from '../store/reducers/carousel';

const SiderMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
      <Menu
        data-testid="options-menu"
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="dark"
        items={options}
        onSelect={({ keyPath }: { keyPath: string[] }) => {
          navigate(`/${keyPath.reverse().join('/')}`)
          dispatch(breadcrumbPath(keyPath.reverse()));
          dispatch(setActualSentenceIndex(0));
          dispatch(setEarnedPoints(0));
        }}
      />
  );
};

export default SiderMenu;
