import { BuildAllTranslationPages } from "../translation-builders";
import { ADMIN_PANEL, APPLICATION_MODALS, APPLICATION_ROOT, DICTIONARY_PAGE, ENGLISH_LEVEL_PAGE, ERROR_PAGE, GRAMMAR_LEVELS, SUPPORT_TEAM, TENSES_PAGE, WELCOME_PAGE } from "../constants";

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

const tenses_page = {
    [TENSES_PAGE.COMMON_TENSES_TITLE]: "¿Qué casos nos dicen que es",
    [TENSES_PAGE.EXAMPLES_TITLE]: "Ejemplos",
    [TENSES_PAGE.SENTENCE_BUILDING]: "Construcción de oraciones",
    [TENSES_PAGE.PRACTICE_TITLE]: "Práctica",
    [TENSES_PAGE.СOMMENTS_TITLE]: "Comentarios",
    [TENSES_PAGE.COMMENTS_POLICY_RULES_TITLE]: "Política de la plataforma de aprendizaje de inglés 📜",
    [TENSES_PAGE.COMMENTS_POLICY_RULES_PART_ONE]: "Como parte de nuestra política, no damos permiso para comentarios que incluyan alguno de los siguientes:",
    [TENSES_PAGE.COMMENTS_POLICY_RULES_PART_TWO]: "Tomamos estas reglas en serio para mantener una comunidad segura y respetuosa para todos los usuarios. Los comentarios que violen estas reglas pueden eliminarse y los infractores reincidentes pueden ser expulsados de la plataforma. Alentamos a todos los usuarios a revisar estas reglas y reportar cualquier comentario que las viole a nuestro equipo de moderación👩‍💻.",
    [TENSES_PAGE.COMMENTS_POLICY_RULES_SUBMIT_BUTTON]: "¡Entiendo!",
    [TENSES_PAGE.COMMENTS_COUNT_TITLE]: "Comentarios",
    [TENSES_PAGE.REPORT_PARTICULAR_COMMENT_BUTTON]: "Informe",
    [TENSES_PAGE.REPORT_COMMENT_DIALOG_TITLE]: "Reportar comentario inapropiado👮‍♀️",
    [TENSES_PAGE.REPORT_COMMENT_DIALOG_DESCRIPTION]: "Nuestra función de informe de comentarios fácil de usar le permite informar rápida y fácilmente cualquier comentario que no coincida con nuestra política de la Plataforma de aprendizaje de inglés. Queremos asegurarnos de que nuestra plataforma sea un espacio seguro y respetuoso para todos los usuarios, y contamos con su ayuda para lograr este objetivo.",
    [TENSES_PAGE.ADD_COMMENT_BUTTON]: "Enviar",
    [TENSES_PAGE.REPORT_DIALOG_ADDITIONAL_INPUT_TITLE]: "¿Quieres añadir una información adicional?",
    [TENSES_PAGE.REPORT_DIALOG_ADDITIONAL_INPUT_LABEL]: "Información adicional",
    [TENSES_PAGE.REPORT_DIALOG_ACTIONS_CANCEL_BUTTON]: "Cancelar",
    [TENSES_PAGE.REPORT_DIALOG_ACTIONS_SEND_BUTTON]: "Enviar",
    [TENSES_PAGE.REPORT_DIALOG_REASON_INPUT_LABEL]: "Razón"
};

const dictionary_page = {
    [DICTIONARY_PAGE.TIP]: "Nuestra función de búsqueda de diccionario sugerirá posibles coincidencias y alternativas, para que pueda encontrar fácilmente la palabra que está buscando.",
    [DICTIONARY_PAGE.UNEXISTED_WORD]: "Palabra inexistente, por favor revise la ortografía.",
    [DICTIONARY_PAGE.PRONUNCIATION_TITLE]: "Pronunciación",
    [DICTIONARY_PAGE.UNEXISTED_SOUND]: "No hay archivo de audio para esta palabra.",
    [DICTIONARY_PAGE.SEARCH_BUTTON]: "Buscar",
    [DICTIONARY_PAGE.TRANSCRIPTION]: "Transcripción"
};

const english_level_page = {
    [ENGLISH_LEVEL_PAGE.TITLE]: "Prueba de nivel de competencia en inglés",
    [ENGLISH_LEVEL_PAGE.LEVEL]: "Tu nivel de ingles es",
    [ENGLISH_LEVEL_PAGE.QUIZ_TITLE]: "¡Saludos y bienvenidos a la evaluación de dominio del inglés! 🌍",
    [ENGLISH_LEVEL_PAGE.NOTE_ONE]: "✅ Intente amablemente todas las preguntas.",
    [ENGLISH_LEVEL_PAGE.NOTE_TWO]: "👀 La evaluación no tiene límites de tiempo.",
    [ENGLISH_LEVEL_PAGE.NOTE_THREE]: "🤷🏽 En caso de que no estés seguro de la respuesta, selecciona la respuesta que creas que podría ser cierta."
};

const support_team = {
    [SUPPORT_TEAM.SEND_REPORT_MODAL_TITLE]: "Informe sobre el problema👷‍♂️",
    [SUPPORT_TEAM.SEND_REPORT_MODAL_FEEDBACK_TITLE]: "¡Su informe fue enviado con éxito!",
    [SUPPORT_TEAM.SEND_REPORT_MODAL_NUMBER]: "Numero de reporte:",
    [SUPPORT_TEAM.SEND_REPORT_MODAL_THANK_MESSAGE]: "¡Gracias por mejorar nuestro servicio!",
    [SUPPORT_TEAM.SEND_REPORT_SUBMIT_BUTTON]: "Enviar",
    [SUPPORT_TEAM.SEND_REPORT_INPUT_MIN_LENGTH_ERROR_DATA_TEST_ID]: "¡Debes escribir al menos 10 símbolos!",
    [SUPPORT_TEAM.SEND_REPORT_INPUT_MAX_LENGTH_ERROR_DATA_TEST_ID]: "¡Has alcanzado el máximo de símbolos!"
};

const user_profile_modal = {
    [APPLICATION_MODALS.REPORT_USER_PROFILE_MODAL_TITLE]: "Reportar Usuario Inapropiado👮‍♀️",
    [APPLICATION_MODALS.REPORT_USER_PROFILE_MODAL_DESCRIPTION]: "Nuestra función de quejas de usuarios le permite informar cualquier comportamiento o contenido que crea que viola nuestras políticas de English Learning Platform. Tomamos todas las quejas con seriedad y nos esforzamos por garantizar que nuestra plataforma sea un espacio seguro y acogedor para todos los usuarios.",
    [APPLICATION_MODALS.PROFILE_MODAL_CLOSE_BUTTON]: "Cerca"
};

const application_modals = {
    ...user_profile_modal
};

const application_root = {
    ...application_modals,
    [APPLICATION_ROOT.FOOTER_AUTHOR_INFORMATION]: "English Learning Platform ©2022 Creado por"
};

const grammar_levels = {
    [GRAMMAR_LEVELS.EXPLANATION]: "Explicación de",
    [GRAMMAR_LEVELS.USE_CASES]: "Casos de uso para",
    [GRAMMAR_LEVELS.CONSOLIDATION_OF_KNOWLEDGE]: "Consolidación del conocimiento"
};

const error_page = {
    [ERROR_PAGE.TITLE]: "¡UH OH! ¡Te has metido en el lío!",
    [ERROR_PAGE.ERROR_PAGE_HOME_BUTTON]: "HOGAR"
};

const admin_panel = {
    [ADMIN_PANEL.TITLE]: "Panel de control de administración",
    [ADMIN_PANEL.DOWNLOAD_FULL_REPORT_BUTTON]: "Descargar Informe",
    [ADMIN_PANEL.LINE_CHART_TITLE]: "Gráfico de líneas de informes por aplicación",
    [ADMIN_PANEL.ALL_APPLICATION_REPORTS]: "Obtenga todos los informes de aplicaciones",
    [ADMIN_PANEL.FILE]: "Archivo",
    [ADMIN_PANEL.DOWNLOAD_FILE_DIALOG_TITLE]: "¿Realmente desea descargar informes para esta aplicación?",
    [ADMIN_PANEL.DISPLAY_IN_BROWSER_FILE]: "Mostrar en el navegador"
};

const ESP_TRANSLATION_BUILD = new BuildAllTranslationPages(
    welcome_page,
    tenses_page,
    dictionary_page,
    english_level_page,
    support_team,
    application_root,
    grammar_levels,
    error_page,
    admin_panel,
    "ESP").buildTranslationObject();

export default ESP_TRANSLATION_BUILD;