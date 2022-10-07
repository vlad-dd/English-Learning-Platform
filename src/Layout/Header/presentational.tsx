import React, { useState, useEffect } from 'react';
import {
  SearchOutlined,
  UserOutlined,
  StarOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Dropdown, Menu, Space, message } from 'antd';
import { auth } from '../../firebase';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
import * as Styled from './styled';
import { AVATARS } from './strings';

type Auth = ReturnType<typeof getAuth>



const Header = () => {
  const [enteredUser, setUser] = useState<any>(null);
  const [authError, setAuthError] = useState<any>(null);
  const navigate = useNavigate();

  const success = () => message.success('Logged in!');
  const error = () => message.error(authError);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser && authUser !== enteredUser) {
        setUser(authUser);
        enteredUser && success();
        authError && error();
      }
    });
  }, [enteredUser]);

  const handleSignOut = () => {
    const auth: Auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser(null);
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      })
      .catch((error) => setAuthError(error));
  };

  const menu = (
    <Menu
      items={[
        {
          label: (
            <>
              <UserOutlined />
              <Styled.MenuItem>Profile</Styled.MenuItem>
            </>
          ),
          key: '0',
        },
        {
          label: (
            <>
              <StarOutlined />
              <Styled.MenuItem>Achievements</Styled.MenuItem>
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
              <Styled.MenuItem onClick={handleSignOut}>
                Sign out
              </Styled.MenuItem>
            </>
          ),
          key: '3',
        },
      ]}
    />
  );

  return (
    <React.Fragment>
      <Styled.Header>
        <Styled.HeaderLeft>
          <SearchOutlined />
          <Styled.HeaderInput placeholder="Search for..." />
        </Styled.HeaderLeft>
        <Styled.HeaderRight>
          {enteredUser && enteredUser !== null ? (
            <Avatar src={AVATARS.admin} />
          ) : (
            <Avatar src={AVATARS.visitor} />
          )}
          <Dropdown overlay={menu} trigger={['click']}>
            <Space>
              <Styled.UserEmail>
                {enteredUser && enteredUser !== null
                  ? enteredUser.email
                  : 'Visitor'}
              </Styled.UserEmail>
            </Space>
          </Dropdown>
        </Styled.HeaderRight>
      </Styled.Header>
    </React.Fragment>
  );
};

export default Header;
