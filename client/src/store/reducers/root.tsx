import { combineReducers } from 'redux';
import { reducer as breadCrumb } from './bread-crumb';
import { reducer as registerSlice } from './registration';
import { reducer as carouselSlice } from './carousel';
import { reducer as tenseSlice } from './tenses';
import { reducer as SendReportSlice } from './send-report-modal';
import { reducer as UserProfileSlice } from './user-profile-modal';
import { reducer as LanguageTranslationSlice } from './translation';

const root = combineReducers({
    tensesBreadCrumb: breadCrumb,
    registration: registerSlice,
    carousel: carouselSlice,
    tense: tenseSlice,
    sendReport: SendReportSlice,
    userProfile: UserProfileSlice,
    translation: LanguageTranslationSlice
});

export default root;