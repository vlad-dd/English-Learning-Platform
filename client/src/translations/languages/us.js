import { BuildAllTranslationPages, WelcomePageLanguageTranslationBuilder } from "../translation-builders";

const welcome_page = new WelcomePageLanguageTranslationBuilder(
    'English Learning Platform',
    'Active Users',
    'Our Goal 🎯',
    'Our platform is designed to provide comprehensive resources and tools that will help you enhance your English language proficiency.',
    'Always Up-to-Date 🔄',
    'Our grammar information and dictionary are regularly updated to ensure that you have access to the latest and most accurate information.',
    "Platform Structure 🗂",
    "Step 1",
    "Step 2",
    "Step 3",
    "Step 4",
    "Identify your level",
    "Explore the grammar",
    "Pass the tests",
    "Use the dictionary with word listening options",
    "How to use English Learning Platform? 🤔",
    "Our Learners Feedback🎓",
    "Hi, I just wanted to say that the English Learning Platform has been a lifesaver for me. The grammar information is clear and easy to understand, and the tests have helped me to identify my weaknesses and improve my English skills."
);

const US_TRANSLATION_BUILD = new BuildAllTranslationPages(welcome_page, "US").buildTranslationObject();

export default US_TRANSLATION_BUILD;
