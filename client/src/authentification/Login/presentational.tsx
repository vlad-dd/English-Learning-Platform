import React from 'react';
import { message } from 'antd';
import { useSelector } from 'react-redux';
import * as selectors from '../../store/selectors';
import AntForm from '../Form';
import {
  ACTION_NAVIGATE_PATH,
  FORM_ACTIONS,
  FORM_ACTION_MESSAGES
} from '../constants';

const Login = () => {
  const { user } = useSelector(selectors.registeredUser);

  return (
    <React.Fragment>
      {user && message.success(FORM_ACTION_MESSAGES.SUCCESSFULLY_REGISTERED)}
      <AntForm action={FORM_ACTIONS.LOGIN} navigatePath={ACTION_NAVIGATE_PATH.HOME} />
    </React.Fragment>
  );
};

export default Login;
