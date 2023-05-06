import {
  UserOutlined,
  StarOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { MenuItem } from '../styled';
import { useDispatch } from 'react-redux';
import { openUserProfileModal } from '../../store/reducers/user-profile-modal';

const AccountOptions = ({ handleSignOut }: { handleSignOut: () => void }) => {
  const dispatch = useDispatch();
  return (
    <Menu
      data-testid="header-dropdown-menu"
      style={{ cursor: "pointer" }}
      items={[
        {
          label: (
            <>
              <UserOutlined />
              <MenuItem onClick={() => dispatch(openUserProfileModal())}>Profile</MenuItem>
            </>
          ),
          key: '0',
        },
        {
          type: 'divider',
        },
        {
          label: (
            <>
              <SettingOutlined />
              <MenuItem onClick={handleSignOut}>
                Sign out
              </MenuItem>
            </>
          ),
          key: '1',
        },
      ]}
    />
  )
}

export default AccountOptions;