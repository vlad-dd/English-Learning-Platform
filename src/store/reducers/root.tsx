import { combineReducers } from "redux";
import { reducer as breadCrumb } from './breadcrumb';
import { reducer as registerSlice } from './registration';

const root = combineReducers({
    tensesBreadCrumb: breadCrumb,
    registration: registerSlice
});

export default root;