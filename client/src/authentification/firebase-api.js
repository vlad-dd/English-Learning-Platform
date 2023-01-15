import { auth, createUserWithEmailAndPassword , signInWithEmailAndPassword } from './firebase';
import { message } from 'antd';
import { register } from '../store/reducers/registration';
import * as STRINGS from './Form/strings';

const FireBaseAPI = {
     handleSignIn: async (email, password, navigate, navigatePath) => {
        if (!email && !password) {
          message.error(STRINGS.ERRORS['EMPTY_FIELDS']);
        }
        if (email.length > 0 && password.length > 0) {
          try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate(navigatePath)
          } 
          catch {
            message.error(STRINGS.ERRORS['UNEXISTED_USER'])
          }
        }
        if(email.length === 0 || password.length === 0) {
          message.error(STRINGS.ERRORS['HALF_EMPTY_FIELDS']);
        }
      },

      handleRegistration: async (email, password, navigate, navigatePath, dispatch) => {
        if (!email && !password) {
          message.error(STRINGS.ERRORS.EMPTY_FIELDS);
        }
    
        if (email.length > 0 && password.length > 0) {
          try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            dispatch(register(user));
            navigate(navigatePath);
          }
          catch {
            message.error(STRINGS.ERRORS.NOT_ACCEPTABLE_FORMAT)
          }
        }
}}

export default FireBaseAPI;