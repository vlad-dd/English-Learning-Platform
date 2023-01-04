import React from 'react';
import { Avatar, Dropdown, Space } from 'antd';
import { FaMoon } from 'react-icons/fa';
import { HeaderRight, UserEmail } from './styled';
import { AVATARS } from './strings';
import { useTheme } from '../../Hooks';
import AccountOptions from './account-options';

/* eslint-disable  @typescript-eslint/no-explicit-any */
const HeaderRightSide = ({ enteredUser, handleSignOut }: any) => {

const { fonts, changeDefaultTheme } = useTheme();

  return (
    <HeaderRight>
    <FaMoon onClick={changeDefaultTheme} style={{ marginRight: '30px', color: fonts, cursor: 'pointer' }} />
      {enteredUser && enteredUser !== null ? (
        <Avatar src={AVATARS.admin} />
      ) : (
        <Avatar src={AVATARS.visitor} />
      )}
      <Dropdown overlay={<AccountOptions handleSignOut={handleSignOut} />} trigger={['click']}>
        <Space>
          <UserEmail style={{color: fonts}}>
            {enteredUser && enteredUser !== null
              ? enteredUser.email
              : 'Guest'}
          </UserEmail>
        </Space>
      </Dropdown>
    </HeaderRight>
  );
}

export default HeaderRightSide;
