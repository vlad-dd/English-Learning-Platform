import React from 'react';
import AntForm from '../Form';

const Registration = () => {
  return (
    <React.Fragment>
      <AntForm action='registration' navigatePath='/login' />
    </React.Fragment>
  );
};

export default Registration;