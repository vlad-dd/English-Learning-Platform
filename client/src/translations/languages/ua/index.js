import { ADMIN_PANEL, APPLICATION_MODALS, APPLICATION_ROOT, DICTIONARY_PAGE, ENGLISH_LEVEL_PAGE, ERROR_PAGE, GRAMMAR_LEVELS, HEADER, SUPPORT_PANEL, SUPPORT_TEAM, TENSES_PAGE, WELCOME_PAGE } from "../../constants";
import { TranslationBuilder } from "../../translation-builders";

const welcome_page = {
    [WELCOME_PAGE.TITLE]: "Платформа для вивчення англійської мови",
    [WELCOME_PAGE.ACTIVE_USERS_COUNT]: "Активні користувачі",
    [WELCOME_PAGE.CARD_GOAL_TITLE]: "Наша мета 🎯",
    [WELCOME_PAGE.CARD_GOAL_BODY]: "Наша платформа призначена для надання комплексних ресурсів та інструментів, які допоможуть вам покращити свою володіння англійською мовою.",
    [WELCOME_PAGE.CARD_UP_TO_DATE_TITLE]: "Завжди оновлюється 🔄",
    [WELCOME_PAGE.CARD_UP_TO_DATE_BODY]: "Наші граматичні відомості та словник регулярно оновлюються, щоб ви мали доступ до найновішої та найточнішої інформації.",
    [WELCOME_PAGE.CARD_STRUCTURE_TITLE]: "Структура платформи 🗂",
    [WELCOME_PAGE.STEP_ONE]: "Крок 1",
    [WELCOME_PAGE.STEP_TWO]: "Крок 2",
    [WELCOME_PAGE.STEP_THREE]: "Крок 1",
    [WELCOME_PAGE.STEP_FOUR]: "Крок 4",
    [WELCOME_PAGE.GUIDELINE_TITLE]: "Як користуватися платформою для навчання англійської мови? 🤔",
    [WELCOME_PAGE.STEP_ONE_DESCRIPTION]: "Визначте свій рівень",
    [WELCOME_PAGE.STEP_TWO_DESCRIPTION]: "Вивчіть граматику",
    [WELCOME_PAGE.STEP_THREE_DESCRIPTION]: "Пройдіть тести",
    [WELCOME_PAGE.STEP_FOUR_DESCRIPTION]: "Використовуйте словник із параметрами прослуховування слів",
    [WELCOME_PAGE.FEEDBACKS_TITLE]: "Відгуки наших учнів🎓",
    [WELCOME_PAGE.FEEDBACK_ONE]: "Привіт! Я просто хотів сказати, що English Learning Platform стала для мене паличкою-виручалочкою. Інформація про граматику є чіткою та легкою для розуміння, а тести допомогли мені виявити свої слабкі сторони та покращити свої знання англійської мови.",
    [WELCOME_PAGE.FEEDBACK_TWO]: "Словник із параметрами прослуховування слів був для мене справді корисним, оскільки він дає змогу почути, як слова вимовляються носіями мови. Я точно рекомендую цю платформу всім, хто хоче покращити свою англійську.",
    [WELCOME_PAGE.FEEDBACK_THREE]: "Я використовую English Learning Platform вже кілька тижнів. Тести для кожної теми дійсно корисні, оскільки вони дозволяють мені практикувати те, що я навчився, і відстежувати свій прогрес. Я ціную зусилля, докладені для створення цієї платформи.",
    [WELCOME_PAGE.FEEDBACK_FOUR]: "Те, що є тести для навчання, також є чудовою особливістю, оскільки це дозволяє мені зосередитися на конкретних сферах, з якими мені важко. Загалом я дуже задоволений цією платформою."
};

const tenses_page = {
    [TENSES_PAGE.COMMON_TENSES_TITLE]: "Які випадки говорять нам про",
    [TENSES_PAGE.EXAMPLES_TITLE]: "Приклади",
    [TENSES_PAGE.SENTENCE_BUILDING]: "Побудова речення",
    [TENSES_PAGE.PRACTICE_TITLE]: "Практика",
    [TENSES_PAGE.СOMMENTS_TITLE]: "Коментарі",
    [TENSES_PAGE.COMMENTS_POLICY_RULES_TITLE]: "Політика платформи навчання англійської мови 📜",
    [TENSES_PAGE.COMMENTS_POLICY_RULES_PART_ONE]: "Згідно з нашою політикою, ми не надаємо дозвіл на коментарі, які включають будь-що з наступного:",
    [TENSES_PAGE.COMMENTS_POLICY_RULES_PART_TWO]: "Ми серйозно ставимося до цих правил, щоб підтримувати безпечну та шанобливу спільноту для всіх користувачів. Коментарі, які порушують ці правила, можуть бути видалені, а повторні порушники можуть бути забанені на платформі. Ми заохочуємо всіх користувачів переглянути ці правила та повідомити про будь-які коментарі, які їх порушують, нашій команді модераторів👩‍💻.",
    [TENSES_PAGE.COMMENTS_POLICY_RULES_SUBMIT_BUTTON]: "Зрозумів!",
    [TENSES_PAGE.COMMENTS_COUNT_TITLE]: "Коментарі",
    [TENSES_PAGE.REPORT_PARTICULAR_COMMENT_BUTTON]: "Поскаржитися",
    [TENSES_PAGE.REPORT_COMMENT_DIALOG_TITLE]: "Повідомити про неприйнятний коментар👮‍♀️",
    [TENSES_PAGE.REPORT_COMMENT_DIALOG_DESCRIPTION]: "Наша проста у використанні функція звітування про коментарі дозволяє швидко та легко повідомляти про будь-які коментарі, які не відповідають нашій політиці English Learning Platform. Ми хочемо переконатися, що наша платформа є безпечним і шанобливим простором для всіх користувачів, і ми покладаємося на вашу допомогу для досягнення цієї мети.",
    [TENSES_PAGE.ADD_COMMENT_BUTTON]: "Надіслати",
    [TENSES_PAGE.REPORT_DIALOG_ADDITIONAL_INPUT_TITLE]: "Хочете додати додаткову інформацію?",
    [TENSES_PAGE.REPORT_DIALOG_ADDITIONAL_INPUT_LABEL]: "Додаткова інформація",
    [TENSES_PAGE.REPORT_DIALOG_ACTIONS_CANCEL_BUTTON]: "Скасувати",
    [TENSES_PAGE.REPORT_DIALOG_ACTIONS_SEND_BUTTON]: "Надіслати",
    [TENSES_PAGE.REPORT_DIALOG_REASON_INPUT_LABEL]: "Причина"
};

const dictionary_page = { 
    [DICTIONARY_PAGE.TIP]: "Наша функція пошуку в словнику запропонує можливі збіги та альтернативи, щоб ви могли легко знайти потрібне слово.",
    [DICTIONARY_PAGE.UNEXISTED_WORD]: "Неіснуюче слово, перевірте його написання.",
    [DICTIONARY_PAGE.PRONUNCIATION_TITLE]: "Вимова",
    [DICTIONARY_PAGE.UNEXISTED_SOUND]: "Для цього слова немає звукового файлу",
    [DICTIONARY_PAGE.SEARCH_BUTTON]: "Пошук",
    [DICTIONARY_PAGE.TRANSCRIPTION]: "Транскрипція"
};

const english_level_page = {
    [ENGLISH_LEVEL_PAGE.TITLE]: "Тест на рівень володіння англійською",
    [ENGLISH_LEVEL_PAGE.LEVEL]: "Ваш рівень англійської",
    [ENGLISH_LEVEL_PAGE.QUIZ_TITLE]: "Вітаємо та ласкаво просимо на тестування рівня англійської мови! 🌍",
    [ENGLISH_LEVEL_PAGE.NOTE_ONE]: "✅ Будь ласка, дайте відповідь на всі запитання.",
    [ENGLISH_LEVEL_PAGE.NOTE_TWO]: "👀 Оцінюнвання не обмежене часом.",
    [ENGLISH_LEVEL_PAGE.NOTE_THREE]: "🤷🏽 Якщо ви не впевнені у відповіді, будь ласка, виберіть відповідь, яка, на вашу думку, може бути правдивою."
};


const support_team = {
    [SUPPORT_TEAM.SEND_REPORT_MODAL_TITLE]: "Повідомити про проблему👷‍♂️",
    [SUPPORT_TEAM.SEND_REPORT_MODAL_FEEDBACK_TITLE]: "Ваш звіт успішно надіслано!",
    [SUPPORT_TEAM.SEND_REPORT_MODAL_NUMBER]: "Номер звіту:",
    [SUPPORT_TEAM.SEND_REPORT_MODAL_THANK_MESSAGE]: "Дякуємо, що робите наш сервіс кращим!",
    [SUPPORT_TEAM.SEND_REPORT_SUBMIT_BUTTON]: "Надіслати",
    [SUPPORT_TEAM.SEND_REPORT_INPUT_MIN_LENGTH_ERROR_DATA_TEST_ID]: "Ви повинні написати не менше 10 символів!",
    [SUPPORT_TEAM.SEND_REPORT_INPUT_MAX_LENGTH_ERROR_DATA_TEST_ID]: "Ви досягли максимальної кількості символів!"
};

const user_profile_modal = {
    [APPLICATION_MODALS.REPORT_USER_PROFILE_MODAL_TITLE]: "Повідомити про невідповідного користувача👮‍♀️",
    [APPLICATION_MODALS.REPORT_USER_PROFILE_MODAL_DESCRIPTION]: "Наша функція подання скарг користувачів дозволяє вам повідомляти про будь-яку поведінку чи вміст, які, на вашу думку, порушують нашу політику English Learning Platform. Ми серйозно ставимося до всіх скарг і прагнемо, щоб наша платформа була безпечною та приємною для всіх користувачів.",
    [APPLICATION_MODALS.PROFILE_MODAL_CLOSE_BUTTON]: "Закрити"
};

const application_modals = {
   ...user_profile_modal
};

const application_root = {
    ...application_modals,
    [APPLICATION_ROOT.FOOTER_AUTHOR_INFORMATION]: "Платформа для вивчення англійської мови ©2022 Створено"
};

const grammar_levels = {
    [GRAMMAR_LEVELS.EXPLANATION]: "Пояснення",
    [GRAMMAR_LEVELS.USE_CASES]: "Випадки використання для",
    [GRAMMAR_LEVELS.CONSOLIDATION_OF_KNOWLEDGE]: "Закріплення Знань"
};

const error_page = {
    [ERROR_PAGE.TITLE]: "ОЙ-ОЙ! Ви потрапили в біду!",
    [ERROR_PAGE.ERROR_PAGE_HOME_BUTTON]: "ДІМ"
};

const admin_panel = {
    [ADMIN_PANEL.TITLE]: "Інформаційна панель адміністратора",
    [ADMIN_PANEL.DOWNLOAD_FULL_REPORT_BUTTON]: "Завантажити звіт",
    [ADMIN_PANEL.LINE_CHART_TITLE]: "Лінійна діаграма звітів за заявками",
    [ADMIN_PANEL.ALL_APPLICATION_REPORTS]: "Звіти про всі програми",
    [ADMIN_PANEL.FILE]: "Файл",
    [ADMIN_PANEL.DOWNLOAD_FILE_DIALOG_TITLE]: "Ви дійсно хочете завантажити звіти для цієї програми?",
    [ADMIN_PANEL.DOWNLOAD_FILE_DIALOG_DESCRIPTION]: "Цей файл містить вичерпний аналіз проблем, які виникли в поточній програмі протягом певного періоду часу. У документі наведено детальний огляд проблем, їх частоту та вплив на продуктивність програми та взаємодію з користувачем.",
    [ADMIN_PANEL.DISPLAY_IN_BROWSER_FILE]: "Відображення в браузері"
};

const header = {
    [HEADER.PROFILE_ACCOUNT_OPTION]: "Профіль",
    [HEADER.PROFILE_SIGN_OUT]: "Вийти з аккаунта"
};

const support_panel = {
    [SUPPORT_PANEL.TITLE]: "Команда панелі підтримки👨‍💻"
};

const UA_TRANSLATION_BUILD = new TranslationBuilder(
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
    header).buildTranslation("UA");

export default UA_TRANSLATION_BUILD;
