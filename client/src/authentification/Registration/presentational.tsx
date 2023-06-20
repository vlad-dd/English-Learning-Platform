import React from 'react';
import AntForm from '../Form';
import { ACTION_NAVIGATE_PATH, FORM_ACTIONS } from '../constants';

const Registration = () => {
  return (
    <React.Fragment>
      <AntForm action={FORM_ACTIONS.REGISTRATION} navigatePath={ACTION_NAVIGATE_PATH.LOGIN} />
    </React.Fragment>
  );
};

export default Registration;