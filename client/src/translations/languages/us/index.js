import { ADMIN_PANEL, APPLICATION_MODALS, APPLICATION_ROOT, DICTIONARY_PAGE, ENGLISH_LEVEL_PAGE, ERROR_PAGE, GRAMMAR_LEVELS, REPORT_USER_PROFILE_MODAL, SUPPORT_TEAM, TENSES_PAGE, WELCOME_PAGE, HEADER, SUPPORT_PANEL } from "../../constants";
import { TranslationBuilder } from "../../translation-builders";

const welcome_page = {
    [WELCOME_PAGE.TITLE]: "English Learning Platform",
    [WELCOME_PAGE.ACTIVE_USERS_COUNT]: "Active Users",
    [WELCOME_PAGE.CARD_GOAL_TITLE]: "Our Goal 🎯",
    [WELCOME_PAGE.CARD_GOAL_BODY]: "Our platform is designed to provide comprehensive resources and tools that will help you enhance your English language proficiency.",
    [WELCOME_PAGE.CARD_UP_TO_DATE_TITLE]: "Always Up-to-Date 🔄",
    [WELCOME_PAGE.CARD_UP_TO_DATE_BODY]: "Our grammar information and dictionary are regularly updated to ensure that you have access to the latest and most accurate information.",
    [WELCOME_PAGE.CARD_STRUCTURE_TITLE]: "Platform Structure 🗂",
    [WELCOME_PAGE.STEP_ONE]: "Step 1",
    [WELCOME_PAGE.STEP_TWO]: "Step 2",
    [WELCOME_PAGE.STEP_THREE]: "Step 3",
    [WELCOME_PAGE.STEP_FOUR]: "Step 4",
    [WELCOME_PAGE.GUIDELINE_TITLE]: "How to use English Learning Platform? 🤔",
    [WELCOME_PAGE.STEP_ONE_DESCRIPTION]: "Identify your level",
    [WELCOME_PAGE.STEP_TWO_DESCRIPTION]: "Explore the grammar",
    [WELCOME_PAGE.STEP_THREE_DESCRIPTION]: "Pass the tests",
    [WELCOME_PAGE.STEP_FOUR_DESCRIPTION]: "Use the dictionary with word listening options",
    [WELCOME_PAGE.FEEDBACKS_TITLE]: "Our Learners Feedback🎓",
    [WELCOME_PAGE.FEEDBACK_ONE]: "Hi, I just wanted to say that the English Learning Platform has been a lifesaver for me. The grammar information is clear and easy to understand, and the tests have helped me to identify my weaknesses and improve my English skills.",
    [WELCOME_PAGE.FEEDBACK_TWO]: "The dictionary with word listening options has been really helpful for me, as it allows me to hear how words are pronounced by native speakers. I would definitely recommend this platform to anyone looking to improve their English.",
    [WELCOME_PAGE.FEEDBACK_THREE]: "I've been using the English Learning Platform for a few weeks now. The tests for each theme are really useful, as they allow me to practice what I've learned and track my progress. I appreciate the effort that has gone into creating this platform.",
    [WELCOME_PAGE.FEEDBACK_FOUR]: "The fact that there are tests for learning is also a great feature, as it allows me to focus on specific areas that I struggle with. Overall, I'm very satisfied with this platform.",
};

const tenses_page = {
    [TENSES_PAGE.COMMON_TENSES_TITLE]: "What cases tell us that it is",
    [TENSES_PAGE.EXAMPLES_TITLE]: "Examples",
    [TENSES_PAGE.SENTENCE_BUILDING]: "Sentence building",
    [TENSES_PAGE.PRACTICE_TITLE]: "Practice",
    [TENSES_PAGE.СOMMENTS_TITLE]: "Comments",
    [TENSES_PAGE.COMMENTS_POLICY_RULES_TITLE]: "English Learning Platform Policy 📜",
    [TENSES_PAGE.COMMENTS_POLICY_RULES_PART_ONE]: "As part of our policy, we do not give permission for comments that include any of the following:",
    [TENSES_PAGE.COMMENTS_POLICY_RULES_PART_TWO]: "We take these rules seriously in order to maintain a safe and respectful community for all users. Comments that violate these rules may be removed, and repeat offenders may be banned from the platform. We encourage all users to review these rules and report any comments that violate them to our moderation team👩‍💻.",
    [TENSES_PAGE.COMMENTS_POLICY_RULES_SUBMIT_BUTTON]: "Got it!",
    [TENSES_PAGE.COMMENTS_COUNT_TITLE]: "Comments",
    [TENSES_PAGE.REPORT_PARTICULAR_COMMENT_BUTTON]: "Report",
    [TENSES_PAGE.REPORT_COMMENT_DIALOG_TITLE]: "Report Inappropriate Comment👮‍♀️",
    [TENSES_PAGE.REPORT_COMMENT_DIALOG_DESCRIPTION]: "Our easy-to-use comment reporting feature allows you to quickly and easily report any comments that do not match our English Learning Platform policy. We want to ensure that our platform is a safe and respectful space for all users, and we rely on your help to achieve this goal.",
    [TENSES_PAGE.ADD_COMMENT_BUTTON]: "Send",
    [TENSES_PAGE.REPORT_DIALOG_ADDITIONAL_INPUT_TITLE]: "Want to add an additional information?",
    [TENSES_PAGE.REPORT_DIALOG_ADDITIONAL_INPUT_LABEL]: "Additional information",
    [TENSES_PAGE.REPORT_DIALOG_ACTIONS_CANCEL_BUTTON]: "Cancel",
    [TENSES_PAGE.REPORT_DIALOG_ACTIONS_SEND_BUTTON]: "Send",
    [TENSES_PAGE.REPORT_DIALOG_REASON_INPUT_LABEL]: "Reason"
};

const dictionary_page = {
    [DICTIONARY_PAGE.TIP]: "Our dictionary search feature will suggest possible matches and alternatives, so you can easily find the word you're looking for.",
    [DICTIONARY_PAGE.UNEXISTED_WORD]: "Unexisted word, please check the spelling",
    [DICTIONARY_PAGE.PRONUNCIATION_TITLE]: "Pronunciation",
    [DICTIONARY_PAGE.UNEXISTED_SOUND]: "There is no audio file for this word",
    [DICTIONARY_PAGE.SEARCH_BUTTON]: "Search",
    [DICTIONARY_PAGE.TRANSCRIPTION]: "Transcription"
};

const english_level_page = {
    [ENGLISH_LEVEL_PAGE.TITLE]: "English Proficiency Level Test",
    [ENGLISH_LEVEL_PAGE.LEVEL]: "Your english level is",
    [ENGLISH_LEVEL_PAGE.QUIZ_TITLE]: "Greetings and welcome to the English proficiency assessment! 🌍",
    [ENGLISH_LEVEL_PAGE.NOTE_ONE]: "✅ Kindly attempt all questions.",
    [ENGLISH_LEVEL_PAGE.NOTE_TWO]: "👀 The assessment does not have time limits.",
    [ENGLISH_LEVEL_PAGE.NOTE_THREE]: "🤷🏽 In case you're unsure of the answer, please select the answer you think could be true."
};

const support_team = {
    [SUPPORT_TEAM.SEND_REPORT_MODAL_TITLE]: "Report about the Problem👷‍♂️",
    [SUPPORT_TEAM.SEND_REPORT_MODAL_FEEDBACK_TITLE]: "Your Report Was Successfully Sent!",
    [SUPPORT_TEAM.SEND_REPORT_MODAL_NUMBER]: "Report number:",
    [SUPPORT_TEAM.SEND_REPORT_MODAL_THANK_MESSAGE]: "Thank you for making our service better!",
    [SUPPORT_TEAM.SEND_REPORT_SUBMIT_BUTTON]: "Send",
    [SUPPORT_TEAM.SEND_REPORT_INPUT_MIN_LENGTH_ERROR_DATA_TEST_ID]: "You should write at least 10 symbols!",
    [SUPPORT_TEAM.SEND_REPORT_INPUT_MAX_LENGTH_ERROR_DATA_TEST_ID]: "You have reached max of symbols!"
};

const user_profile_modal = {
    [APPLICATION_MODALS.REPORT_USER_PROFILE_MODAL_TITLE]: "Report Inappropriate User👮‍♀️",
    [APPLICATION_MODALS.REPORT_USER_PROFILE_MODAL_DESCRIPTION]: "Our user complaint feature allows you to report any behavior or content that you believe violates our English Learning Platform policies. We take all complaints seriously and strive to ensure that our platform is a safe and welcoming space for all users.",
    [APPLICATION_MODALS.PROFILE_MODAL_CLOSE_BUTTON]: "Close"
};

const application_modals = {
    ...user_profile_modal
};

const application_root = {
    ...application_modals,
    [APPLICATION_ROOT.FOOTER_AUTHOR_INFORMATION]: "English Learning Platform ©2022 Created by",
};

const grammar_levels = {
    [GRAMMAR_LEVELS.EXPLANATION]: "Explanation Of",
    [GRAMMAR_LEVELS.USE_CASES]: "Use Cases For",
    [GRAMMAR_LEVELS.CONSOLIDATION_OF_KNOWLEDGE]: "Consolidation Of Knowledge"
};

const error_page = {
    [ERROR_PAGE.TITLE]: "UH OH! You have got into the trouble!",
    [ERROR_PAGE.ERROR_PAGE_HOME_BUTTON]: "HOME"
};

const admin_panel = {
    [ADMIN_PANEL.TITLE]: "Admin Control Dashboard",
    [ADMIN_PANEL.DOWNLOAD_FULL_REPORT_BUTTON]: "Download Report",
    [ADMIN_PANEL.LINE_CHART_TITLE]: "Line Chart Of Reports By Application",
    [ADMIN_PANEL.ALL_APPLICATION_REPORTS]: "Get All Applications Reports",
    [ADMIN_PANEL.FILE]: "File",
    [ADMIN_PANEL.DOWNLOAD_FILE_DIALOG_TITLE]: "Do you really want to download reports for this application?",
    [ADMIN_PANEL.DOWNLOAD_FILE_DIALOG_DESCRIPTION]: "This file provides a comprehensive analysis of the issues encountered in current application during a specific time period. The document presents a detailed overview of the issues, their frequency, and their impact on the application's performance and user experience.",
    [ADMIN_PANEL.DISPLAY_IN_BROWSER_FILE]: "Display in browser"
};

const header = {
    [HEADER.PROFILE_ACCOUNT_OPTION]: "Profile",
    [HEADER.PROFILE_SIGN_OUT]: "Sign out"
};

const support_panel = {
    [SUPPORT_PANEL.TITLE]: "Support Panel Team👨‍💻"
};

const US_TRANSLATION_BUILD = new TranslationBuilder(
    welcome_page,
    tenses_page,
    dictionary_page,
    english_level_page,
    support_team,
    application_root,
    grammar_levels,
    error_page,
    admin_panel,
    support_panel,
    header).buildTranslation("US");

export default US_TRANSLATION_BUILD;
