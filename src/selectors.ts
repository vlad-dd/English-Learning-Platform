import { State } from './store/store';

const getState = (state: State) => state;

export const tensesBCState= (state: State) => getState(state).tensesBreadCrumb;

export const registeredUser = (state: State) => getState(state).registration.user;