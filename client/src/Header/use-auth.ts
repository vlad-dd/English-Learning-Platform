import { getAuth, signOut } from 'firebase/auth';
import { useState, useEffect } from "react";
import { auth } from '../authentification/firebase';
import { message } from 'antd';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { register } from '../store/reducers/registration';

type Auth = ReturnType<typeof getAuth>

export const useAuthWidget = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [enteredUser, setUser] = useState<any>(null);
  const [authError, setAuthError] = useState<any>(null);

  const success = () => message.success('Logged in!');
  const error = () => message.error(authError);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser !== null) {
        setUser(authUser);
        dispatch(register(authUser))
        enteredUser && setTimeout(() => success());
        authError && setTimeout(() => error());
      }
    });
  }, [enteredUser]);

  const handleSignOut = () => {
    const auth: Auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser(null);
        setTimeout(() => message.warning('Logging out...'));
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      })
      .catch((error) => setAuthError(error));
  };

  return { enteredUser, authError, setUser, setAuthError, handleSignOut };
}