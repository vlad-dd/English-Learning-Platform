import { WELCOME_PAGE } from "../constants";
import { BuildAllTranslationPages } from "../translation-builders";

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
}

const UA_TRANSLATION_BUILD = new BuildAllTranslationPages(welcome_page, "UA").buildTranslationObject();

export default UA_TRANSLATION_BUILD;
