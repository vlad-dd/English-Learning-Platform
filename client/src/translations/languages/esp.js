import { BuildAllTranslationPages } from "../translation-builders";
import { WELCOME_PAGE } from "../constants";

const welcome_page = {
    [WELCOME_PAGE.TITLE]: "Plataforma de aprendizaje de inglés",
    [WELCOME_PAGE.ACTIVE_USERS_COUNT]: "Usuarios activos",
    [WELCOME_PAGE.CARD_GOAL_TITLE]: "Nuestra meta 🎯",
    [WELCOME_PAGE.CARD_GOAL_BODY]: "Nuestra plataforma está diseñada para proporcionar recursos y herramientas integrales que lo ayudarán a mejorar su dominio del idioma inglés.",
    [WELCOME_PAGE.CARD_UP_TO_DATE_TITLE]: "Siempre actualizado 🔄",
    [WELCOME_PAGE.CARD_UP_TO_DATE_BODY]: "Nuestra información gramatical y nuestro diccionario se actualizan regularmente para garantizar que tenga acceso a la información más reciente y precisa.",
    [WELCOME_PAGE.CARD_STRUCTURE_TITLE]: "Estructura de la plataforma 🗂",
    [WELCOME_PAGE.STEP_ONE]: "Paso 1",
    [WELCOME_PAGE.STEP_TWO]: "Paso 2",
    [WELCOME_PAGE.STEP_THREE]: "Paso 3",
    [WELCOME_PAGE.STEP_FOUR]: "Paso 4",
    [WELCOME_PAGE.GUIDELINE_TITLE]: "¿Cómo usar la plataforma de aprendizaje de inglés? 🤔",
    [WELCOME_PAGE.STEP_ONE_DESCRIPTION]: "Identifica tu nivel",
    [WELCOME_PAGE.STEP_TWO_DESCRIPTION]: "Explora la gramática",
    [WELCOME_PAGE.STEP_THREE_DESCRIPTION]: "Pasar las pruebas",
    [WELCOME_PAGE.STEP_THREE_DESCRIPTION]: "Usa el diccionario con opciones para escuchar palabras",
    [WELCOME_PAGE.FEEDBACKS_TITLE]: "Comentarios de nuestros alumnos🎓",
    [WELCOME_PAGE.FEEDBACK_ONE]: "Hola, solo quería decir que la plataforma de aprendizaje de inglés me ha salvado la vida. La información gramatical es clara y fácil de entender, y las pruebas me han ayudado a identificar mis debilidades y mejorar mis habilidades en inglés.",
    [WELCOME_PAGE.FEEDBACK_TWO]: "El diccionario con opciones de escucha de palabras ha sido muy útil para mí, ya que me permite escuchar cómo pronuncian las palabras los hablantes nativos. Definitivamente recomendaría esta plataforma a cualquiera que busque mejorar su inglés.",
    [WELCOME_PAGE.FEEDBACK_THREE]: "He estado usando la plataforma de aprendizaje de inglés durante algunas semanas. Las pruebas de cada tema son realmente útiles, ya que me permiten practicar lo que he aprendido y seguir mi progreso. Agradezco el esfuerzo que se ha realizado para crear esta plataforma.",
    [WELCOME_PAGE.FEEDBACK_FOUR]: "El hecho de que haya pruebas para el aprendizaje también es una gran característica, ya que me permite concentrarme en áreas específicas con las que tengo problemas. En general, estoy muy satisfecho con esta plataforma.",
};

const ESP_TRANSLATION_BUILD = new BuildAllTranslationPages(welcome_page, "ESP").buildTranslationObject();

export default ESP_TRANSLATION_BUILD;