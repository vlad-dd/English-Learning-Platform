import { AiOutlineTrophy } from 'react-icons/ai'
import { GiProgression } from 'react-icons/gi';
import { uid } from "../../../utils/utils";
import {
    UserAchievements,
    UserProgressContainer,
    TabActionLabel
} from "./components";

const TAB_ACHIEVEMENTS = [
    { id: uid(5), achievement: 'A0 Level Passed', color: 'green' },
    { id: uid(5), achievement: 'A1 Level Passed', color: 'orange' },
    { id: uid(5), achievement: 'A2 Level Passed', color: 'purple' },
]

const USER_PROGRESS = [
    { id: uid(5), label: 'Tenses', percent: 65 },
    { id: uid(5), label: 'Grammar', percent: 100 }
]

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