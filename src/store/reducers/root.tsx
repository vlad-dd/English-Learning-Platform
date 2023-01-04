import { combineReducers } from 'redux';
import { reducer as breadCrumb } from './breadcrumb';
import { reducer as registerSlice } from './registration';
import { reducer as carouselSlice } from './carousel';

const root = combineReducers({
    tensesBreadCrumb: breadCrumb,
    registration: registerSlice,
    carousel: carouselSlice
});

export default root;