import { User } from '@firebase/auth-types';

export interface IHeaderRightSide {
    enteredUser: User;
    handleSignOut: () => void
}