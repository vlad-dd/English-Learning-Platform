import { State } from '..';

const getState = (state: State) => state;

export const tensesBCState= (state: State) => getState(state).tensesBreadCrumb;

export const carouselIndexAndPoints= (state: State) => getState(state).carousel;

export const registeredUser = (state: State) => getState(state).registration.user;

export const tenseConfiguration = (state: State) => getState(state).tense.tenseConfiguration;

export const reportModalState = (state: State) => getState(state).sendReport;