import React from 'react';
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FormattedMessage } from 'react-intl';

const CARDS_INFORMATION= [
    { id: 1, title: <FormattedMessage id="platform_goal_title" />, description: <FormattedMessage id="goal_card_body" /> },
    { id: 2, title: <FormattedMessage id="card_up_to_date_title" />, description: <FormattedMessage id="up_to_date_card_body" /> },
];

const CARDS_INFORMATION_LIST = [
    { id: 1, title: 'English verbs with tests for better understanding', link: '/Tenses/Present/Present-Simple'  },
    { id: 2, title: 'Grammar in details for each level of English', link: '/Grammar-Levels/A1/Plural'  },
    { id: 3, title: 'Dictionary with listening options by native speakers', link: '/Dictionary', color: 'orange'  },
    { id: 4, title: 'Separated tests for focusing on specific areas', link: '/Tests/Verbs/Mixed-Tenses', color: 'purple'  },
];

const LEARNERS_FEEDBACK = [
    { id: '1', title: 'Jack Smith', description: 'Hi, I just wanted to say that the English Learning Platform has been a lifesaver for me. The grammar information is clear and easy to understand, and the tests have helped me to identify my weaknesses and improve my English skills.' },
    { id: '2', title: 'Sarah Garcia', description: 'The dictionary with word listening options has been really helpful for me, as it allows me to hear how words are pronounced by native speakers. I would definitely recommend this platform to anyone looking to improve their English.' },
    { id: '3', title: 'Michael Lee', description: "I've been using the English Learning Platform for a few weeks now. The tests for each theme are really useful, as they allow me to practice what I've learned and track my progress. I appreciate the effort that has gone into creating this platform." },
    { id: '4', title: 'Anna Kim', description: "The fact that there are tests for learning is also a great feature, as it allows me to focus on specific areas that I struggle with. Overall, I'm very satisfied with this platform." },
]

const SOCIAL_MEDIAS = [
    {id: 1, media: 'Twitter', icon: <BsTwitter />, color: '#55acee' },
    {id: 2, media: 'Youtube', icon: <BsYoutube />, color: '#cd201f' },
    {id: 3, media: 'Facebook', icon: <BsFacebook />, color: '#3b5999' },
    {id: 4, media: 'Linkedin', icon: <BsLinkedin />, color: '#55acee' },
];

const GUIDELINE_STEPS = [
    {
        title: 'Step 1',
        description: 'Identify your level',
    },
    {
        title: 'Step 2',
        description: 'Explore the grammar'
    },
    {
        title: 'Step 3',
        description: 'Pass the tests'
    },
    {
        title: 'Step 4',
        description: 'Use the dictionary with word listening options',
    }
]

export { 
    CARDS_INFORMATION,
    CARDS_INFORMATION_LIST,
    LEARNERS_FEEDBACK,
    SOCIAL_MEDIAS,
    GUIDELINE_STEPS
 }
