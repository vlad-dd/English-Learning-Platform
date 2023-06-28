import { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
import { isNil, size } from 'lodash';
import { auth } from '../authentification/firebase';
import { register } from '../store/reducers/registration';
import { errorMessage, successMessage, warningMessage } from "../utils/utils";
import { APPLICATION_NAVIGATION, SYSTEM_FEEDBACK_MESSAGES } from '../Сommon/constants';

export const useAuthWidget = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [enteredUser, setUser] = useState<any>(null);
  const [authError, setAuthError] = useState<any>(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (!isNil(authUser)) {
        setUser(authUser);
        dispatch(register(authUser));
        !!size(enteredUser) && setTimeout(() => successMessage(SYSTEM_FEEDBACK_MESSAGES.LOGGED_IN));
        !!size(authError) && setTimeout(() => errorMessage(authError));
      };
    });
  }, [enteredUser]);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser(null);
        setTimeout(() => warningMessage(SYSTEM_FEEDBACK_MESSAGES.LOGGING_OUT));
        setTimeout(() => {
          navigate(APPLICATION_NAVIGATION.LOGIN);
        }, 3000);
      })
      .catch((error) => setAuthError(error));
  };

  return { enteredUser, authError, setUser, setAuthError, handleSignOut };
}