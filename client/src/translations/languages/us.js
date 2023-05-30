import { WELCOME_PAGE } from "../constants";
import { BuildAllTranslationPages } from "../translation-builders";

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

const US_TRANSLATION_BUILD = new BuildAllTranslationPages(welcome_page, "US").buildTranslationObject();

export default US_TRANSLATION_BUILD;
