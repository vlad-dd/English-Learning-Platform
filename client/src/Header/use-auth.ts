import { getAuth, signOut } from 'firebase/auth';
import { useState, useEffect } from "react";
import { auth } from '../authentification/firebase';
import { message } from 'antd';
import { useNavigate } from 'react-router';

type Auth = ReturnType<typeof getAuth>

export const useAuth = () => {
    const [enteredUser, setUser] = useState<any>(null);
    const [authError, setAuthError] = useState<any>(null);
    const navigate = useNavigate();
  
    const success = () => message.success('Logged in!');
    const error = () => message.error(authError);
  
    useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
          setUser(authUser);
          if(authUser !== null) {
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