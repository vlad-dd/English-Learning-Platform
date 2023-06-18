import { AiOutlineTrophy } from 'react-icons/ai'
import { GiProgression } from 'react-icons/gi';
import { uid } from "../../../utils/utils";
import {
    UserAchievements,
    UserProgressContainer,
    TabActionLabel
} from "./components";

export const CLOSE_PROFILE_MODAL_BUTTON_DATA_TEST_ID = "close-profile-modal-button";
export const COMMUNICATION_BLOCK_DATA_TEST_ID = "communication-block";
export const MAIN_INFORMATION_BLOCK_DATA_TEST_ID= "main-information-block";
export const PROFILE_MODAL_DATA_TEST_ID = "profile-modal";
export const USER_DETAILS_DATA_TEST_ID = "user-details-block";
export const SEND_MESSAGE_BUTTON_DATA_TEST_ID = "send-message-button";
export const REPORT_USER_BUTTON_DATA_TEST_ID = "report-user-button";

export const TAB_ACHIEVEMENTS = [
    { id: uid(5), achievement: 'A0 Level Passed', color: 'green' },
    { id: uid(5), achievement: 'A1 Level Passed', color: 'orange' },
    { id: uid(5), achievement: 'A2 Level Passed', color: 'purple' },
];

const USER_PROGRESS = [
    { id: uid(5), label: 'Tenses', percent: 65 },
    { id: uid(5), label: 'Grammar', percent: 100 }
];

export const PROFILE_TAB_ACTIONS = [
    {
        key: '1',
        label: <TabActionLabel label='Achievements' Icon={AiOutlineTrophy} />,
        children: <UserAchievements achievements={TAB_ACHIEVEMENTS} />
    },
    {
        key: '2',
        label: <TabActionLabel label='Progress' Icon={GiProgression} />,
        children: <UserProgressContainer progress={USER_PROGRESS} />
    },
];