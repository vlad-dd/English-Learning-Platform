import React from 'react';
import { message } from 'antd';
import { useSelector } from 'react-redux';
import * as selectors from '../../store/selectors';
import AntForm from '../Form';

const Login = () => {
  const { user } = useSelector(selectors.registeredUser);

  return (
    <React.Fragment>
      {user && message.success(`Successfully registered!`)}
      <AntForm action='login' navigatePath='/' />
    </React.Fragment>
  );
};

export default Login;
