import { BuildAllTranslationPages, WelcomePageLanguageTranslationBuilder } from "../translation-builders";

const welcome_page = new WelcomePageLanguageTranslationBuilder(
    "Plataforma de aprendizaje de inglés",
    "Usuarios activos",
    "Nuestra meta 🎯",
    "Nuestra plataforma está diseñada para proporcionar recursos y herramientas integrales que lo ayudarán a mejorar su dominio del idioma inglés.",
    "Siempre actualizado 🔄",
    "Nuestra información gramatical y nuestro diccionario se actualizan regularmente para garantizar que tenga acceso a la información más reciente y precisa.",
    "Estructura de la plataforma 🗂",
    "Paso 1",
    "Paso 2",
    "Paso 3",
    "Paso 4",
    "Identifica tu nivel",
    "Explora la gramática",
    "Pasar las pruebas",
    "Usa el diccionario con opciones para escuchar palabras",
    "¿Cómo usar la plataforma de aprendizaje de inglés? 🤔",
    "Comentarios de nuestros alumnos🎓",
    "Hola, solo quería decir que la plataforma de aprendizaje de inglés me ha salvado la vida. La información gramatical es clara y fácil de entender, y las pruebas me han ayudado a identificar mis debilidades y mejorar mis habilidades en inglés."
);

const ESP_TRANSLATION_BUILD = new BuildAllTranslationPages(welcome_page, "ESP").buildTranslationObject();

export default ESP_TRANSLATION_BUILD;