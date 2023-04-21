import React from 'react';
import { User } from '@firebase/auth-types';
import { Dropdown, Space } from 'antd';
import { FiDatabase } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaMoon } from 'react-icons/fa';
import { Image } from '../../Сommon';
import { HeaderRight, UserEmail } from '../styled';
import { AVATARS } from '../strings';
import { useTheme } from '../../Hooks';
import AccountOptions from './account-options';


const HeaderRightSide = ({ enteredUser, handleSignOut }: { enteredUser: User, handleSignOut: () => void }) => {

const { fonts, changeDefaultTheme } = useTheme();

  return (
    <HeaderRight>
    {enteredUser?.email === 'adminelp@gmail.com' ? <Link to="/Admin"><FiDatabase style={{ marginRight: '30px', color: fonts, cursor: 'pointer' }} /></Link> : ''}
    <FaMoon onClick={changeDefaultTheme} style={{ marginRight: '30px', color: fonts, cursor: 'pointer' }} />
      {enteredUser && enteredUser !== null ? (
        <Image url={AVATARS.admin} styles={{ height: "32px", width: "32px" , borderRadius: "50%", objectFit: "cover" }} />
      ) : (
        <Image url={AVATARS.visitor} styles={{ height: "32px", width: "32px" , borderRadius: "50%", objectFit: "cover" }} />
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
