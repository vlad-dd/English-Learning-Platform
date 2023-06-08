import { FormattedMessage } from 'react-intl';
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';

export const WELCOME_PAGE_SECTION_DATA_TEST_ID = "welcome-page-section";
export const PLATFORM_CARDS_DATA_TEST_ID = "platform-cards";
export const LEARNER_FEEDBACK_DATA_TEST_ID = "learner-feedbacks";
export const USER_COUNT_TITLE_CLASSNAME = "elp-title";
export const USER_COUNT_TITLE_ID = "welcome_page_title";
export const SOCIAL_MEDIAS_DATA_TEST_ID = "social-medias-section";
export const GUIDELINE_STEPS_DATA_TEST_ID = "steps-guideline";
export const REPORT_SERVICE_ICON_DATA_TEST_ID = "report-service-icon";

export const CARDS_INFORMATION= [
    { id: 1, title: <FormattedMessage id="platform_goal_title" />, description: <FormattedMessage id="goal_card_body" /> },
    { id: 2, title: <FormattedMessage id="card_up_to_date_title" />, description: <FormattedMessage id="up_to_date_card_body" /> },
];

export const CARDS_INFORMATION_LIST = [
    { id: 1, title: 'English verbs with tests for better understanding', link: '/Tenses/Present/Present-Simple'  },
    { id: 2, title: 'Grammar in details for each level of English', link: '/Grammar-Levels/A1/Plural'  },
    { id: 3, title: 'Dictionary with listening options by native speakers', link: '/Dictionary', color: 'orange'  },
    { id: 4, title: 'Separated tests for focusing on specific areas', link: '/Tests/Verbs/Mixed-Tenses', color: 'purple'  },
];

export const LEARNERS_FEEDBACK = [
    { id: '1', title: 'Jack Smith', description: <FormattedMessage id="welcome_page_feedback_1" /> },
    { id: '2', title: 'Sarah Garcia', description: <FormattedMessage id="welcome_page_feedback_2" /> },
    { id: '3', title: 'Michael Lee', description: <FormattedMessage id="welcome_page_feedback_3" /> },
    { id: '4', title: 'Anna Kim', description: <FormattedMessage id="welcome_page_feedback_4" /> },
]

export const SOCIAL_MEDIAS = [
    {id: 1, media: 'Twitter', icon: <BsTwitter />, color: '#55acee' },
    {id: 2, media: 'Youtube', icon: <BsYoutube />, color: '#cd201f' },
    {id: 3, media: 'Facebook', icon: <BsFacebook />, color: '#3b5999' },
    {id: 4, media: 'Linkedin', icon: <BsLinkedin />, color: '#55acee' },
];

export const GUIDELINE_STEPS = [
    {
        title: <FormattedMessage id="welcome_page_step_1" />,
        description: <FormattedMessage id="description_step_one" />,
    },
    {
        title: <FormattedMessage id="welcome_page_step_2" />,
        description: <FormattedMessage id="description_step_two" />
    },
    {
        title: <FormattedMessage id="welcome_page_step_3" />,
        description: <FormattedMessage id="description_step_three" />
    },
    {
        title: <FormattedMessage id="welcome_page_step_4" />,
        description: <FormattedMessage id="description_step_four" />,
    }
];
