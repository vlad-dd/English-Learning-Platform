import { useState, useEffect } from "react";
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { auth } from '../authentification/firebase';
import { message } from 'antd';
import { register } from '../store/reducers/registration';
import { APPLICATION_NAVIGATION, SYSTEM_FEEDBACK_MESSAGES } from '../Сommon/constants';
import { size } from 'lodash';

export const useAuthWidget = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [enteredUser, setUser] = useState<any>(null);
  const [authError, setAuthError] = useState<any>(null);

  const success = () => message.success(SYSTEM_FEEDBACK_MESSAGES.LOGGED_IN);
  const error = () => message.error(authError);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser !== null) {
        setUser(authUser);
        dispatch(register(authUser))
        !!size(enteredUser) && setTimeout(() => success());
        !!size(authError) && setTimeout(() => error());
      }
    });
  }, [enteredUser]);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser(null);
        setTimeout(() => message.warning(SYSTEM_FEEDBACK_MESSAGES.LOGGING_OUT));
        setTimeout(() => {
          navigate(APPLICATION_NAVIGATION.LOGIN);
        }, 3000);
      })
      .catch((error) => setAuthError(error));
  };

  return { enteredUser, authError, setUser, setAuthError, handleSignOut };
}