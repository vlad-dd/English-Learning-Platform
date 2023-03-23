import { combineReducers } from 'redux';
import { reducer as breadCrumb } from './bread-crumb';
import { reducer as registerSlice } from './registration';
import { reducer as carouselSlice } from './carousel';
import { reducer as tenseSlice } from './tenses';
import { reducer as SendReportSlice } from './send-report';

const root = combineReducers({
    tensesBreadCrumb: breadCrumb,
    registration: registerSlice,
    carousel: carouselSlice,
    tense: tenseSlice,
    sendReport: SendReportSlice
});

export default root;