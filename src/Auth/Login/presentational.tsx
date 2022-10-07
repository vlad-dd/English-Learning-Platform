import React from 'react';
import { message } from 'antd';
import { useSelector } from 'react-redux';
import * as selectors from '../../selectors';
import { AntForm } from '../../Сommon';

const Login = () => {
  const user = useSelector(selectors.registeredUser);

  return (
    <React.Fragment>
      {user.user && message.success(`Successfully registered, ${user.user._delegate.email}!`)}
      <AntForm action='login' navigatePath='/' />
    </React.Fragment>
  );
};

export default Login;
