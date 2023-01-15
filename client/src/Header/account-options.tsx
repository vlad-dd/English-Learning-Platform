import React from 'react';
import {
    UserOutlined,
    StarOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { Menu  } from 'antd';
import { MenuItem } from './styled';


const AccountOptions = ({ handleSignOut }: any) => {
    return (
    <Menu
      items={[
        {
          label: (
            <>
              <UserOutlined />
              <MenuItem>Profile</MenuItem>
            </>
          ),
          key: '0',
        },
        {
          label: (
            <>
              <StarOutlined />
              <MenuItem>Achievements</MenuItem>
            </>
          ),
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: (
            <>
              <SettingOutlined />{' '}
              <MenuItem onClick={handleSignOut}>
                Sign out
              </MenuItem>
            </>
          ),
          key: '3',
        },
      ]}
    />
    )
}

export default AccountOptions;