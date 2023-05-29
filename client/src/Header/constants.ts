import { uid } from "../utils/utils";

const APPLICATION_PARTS = [
    { title: 'Present-Simple', path: '/Tenses/Present/Present-Simple' },
    { title: 'Present-Continuous', path: '/Tenses/Present/Present-Continuous' },
    { title: 'Present-Perfect', path: '/Tenses/Present/Present-Perfect' },
    { title: 'Present-Perfect-Continuous', path: '/Tenses/Present/Present-Perfect-Continuous' },
    { title: 'Past-Simple', path: '/Tenses/Past/Past-Simple' },
    { title: 'Past-Continuous', path: '/Tenses/Past/Past-Continuous' },
    { title: 'Past-Perfect', path: '/Tenses/Past/Past-Perfect' },
    { title: 'Past-Perfect-Continuous', path: '/Tenses/Past/Past-Perfect-Continuous' },
    { title: 'Future-Simple', path: '/Tenses/Future/Future-Simple' },
    { title: 'Future-Continuous', path: '/Tenses/Future/Future-Continuous' },
    { title: 'Future-Perfect', path: '/Tenses/Future/Future-Perfect' },
    { title: 'Future-Perfect-Continuous', path: '/Tenses/Future/Future-Perfect-Continuous' },
    { title: 'Dictionary', path: '/Dictionary' },
    { title: 'Grammar: Plural', path: '/Grammar-Levels/A1/Plural' },
    { title: 'Tests: Mixed Tenses', path: '/Tests/Verbs/Mixed-Tenses' },
    { title: 'Tests: Present', path: '/Tests/Verbs/Present' },
    { title: 'Tests: Past', path: '/Tests/Verbs/Past' },
];

const LANGUAGES = [
    { id: uid(5), key: "US", icon: "https://t4.ftcdn.net/jpg/00/65/12/49/360_F_65124908_UpNHzTdQn2HNAIT8yYqybMQeGfsRmVc7.jpg" },
    { id: uid(5), key: "UA", icon: "https://www.countryflags.com/wp-content/uploads/ukraine-flag-png-large.png" },
    { id: uid(5), key: "JP", icon: "https://www.countryflags.com/wp-content/uploads/japan-flag-png-xl.png" },
    { id: uid(5), key: "ESP", icon: "https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png" },
    { id: uid(5), key: "FR", icon: "https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png" },
    { id: uid(5), key: "GER", icon: "https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png" },
];

export { APPLICATION_PARTS, LANGUAGES };