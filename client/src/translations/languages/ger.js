import { DICTIONARY_PAGE, TENSES_PAGE, WELCOME_PAGE } from "../constants";
import { BuildAllTranslationPages } from "../translation-builders";

const welcome_page = {
    [WELCOME_PAGE.TITLE]: "Englisch-Lernplattform",
    [WELCOME_PAGE.ACTIVE_USERS_COUNT]: "Aktive Benutzer",
    [WELCOME_PAGE.CARD_GOAL_TITLE]: "Unser Ziel 🎯",
    [WELCOME_PAGE.CARD_GOAL_BODY]: "Unsere Plattform ist darauf ausgelegt, umfassende Ressourcen und Tools bereitzustellen, mit denen Sie Ihre Englischkenntnisse verbessern können.",
    [WELCOME_PAGE.CARD_UP_TO_DATE_TITLE]: "Immer Up-to-Date 🔄",
    [WELCOME_PAGE.CARD_UP_TO_DATE_BODY]: "Unsere Grammatikinformationen und unser Wörterbuch werden regelmäßig aktualisiert, um sicherzustellen, dass Sie Zugriff auf die neuesten und genauesten Informationen haben.",
    [WELCOME_PAGE.CARD_STRUCTURE_TITLE]: "Plattformstruktur 🗂",
    [WELCOME_PAGE.STEP_ONE]: "Schritt 1",
    [WELCOME_PAGE.STEP_TWO]: "Schritt 2",
    [WELCOME_PAGE.STEP_THREE]: "Schritt 3",
    [WELCOME_PAGE.STEP_FOUR]: "Schritt 4",
    [WELCOME_PAGE.GUIDELINE_TITLE]: "Wie verwende ich die Englisch-Lernplattform? 🤔",
    [WELCOME_PAGE.STEP_ONE_DESCRIPTION]: "Identifizieren Sie Ihr Niveau",
    [WELCOME_PAGE.STEP_TWO_DESCRIPTION]: "Entdecken Sie die Grammatik",
    [WELCOME_PAGE.STEP_THREE_DESCRIPTION]: "Bestehen Sie die Tests",
    [WELCOME_PAGE.STEP_FOUR_DESCRIPTION]: "Verwenden Sie das Wörterbuch mit Optionen zum Hören von Wörtern",
    [WELCOME_PAGE.FEEDBACKS_TITLE]: "Das Feedback unserer Lernenden🎓",
    [WELCOME_PAGE.FEEDBACK_ONE]: "Hallo, ich wollte nur sagen, dass die English Learning Platform für mich ein Lebensretter war. Die Grammatikinformationen sind klar und leicht verständlich und die Tests haben mir geholfen, meine Schwächen zu erkennen und meine Englischkenntnisse zu verbessern.",
    [WELCOME_PAGE.FEEDBACK_TWO]: "Das Wörterbuch mit Worthöroptionen war für mich wirklich hilfreich, da ich damit hören kann, wie Wörter von Muttersprachlern ausgesprochen werden. Ich würde diese Plattform auf jeden Fall jedem empfehlen, der sein Englisch verbessern möchte.",
    [WELCOME_PAGE.FEEDBACK_THREE]: "Ich nutze die English Learning Platform nun seit einigen Wochen. Die Tests für jedes Thema sind wirklich nützlich, da sie es mir ermöglichen, das Gelernte zu üben und meine Fortschritte zu verfolgen. Ich schätze die Mühe, die in die Schaffung dieser Plattform gesteckt wurde.",
    [WELCOME_PAGE.FEEDBACK_FOUR]: "Auch die Tatsache, dass es Lerntests gibt, ist ein tolles Feature, da ich mich so auf bestimmte Bereiche konzentrieren kann, mit denen ich Schwierigkeiten habe. Insgesamt bin ich mit dieser Plattform sehr zufrieden.",
};

const tenses_page = {
    [TENSES_PAGE.COMMON_TENSES_TITLE]: "Welche Fälle sagen uns, dass es so ist",
    [TENSES_PAGE.EXAMPLES_TITLE]: "Beispiele",
    [TENSES_PAGE.SENTENCE_BUILDING]: "Satzbau",
    [TENSES_PAGE.PRACTICE_TITLE]: "Üben",
    [TENSES_PAGE.СOMMENTS_TITLE]: "Kommentare",
    [TENSES_PAGE.COMMENTS_POLICY_RULES_TITLE]: "Richtlinie zur Englisch-Lernplattform 📜",
    [TENSES_PAGE.COMMENTS_POLICY_RULES_PART_ONE]: "Im Rahmen unserer Richtlinien gestatten wir keine Kommentare, die Folgendes enthalten:",
    [TENSES_PAGE.COMMENTS_POLICY_RULES_PART_TWO]: "Wir nehmen diese Regeln ernst, um eine sichere und respektvolle Community für alle Benutzer aufrechtzuerhalten. Kommentare, die gegen diese Regeln verstoßen, können entfernt werden und Wiederholungstäter können von der Plattform verbannt werden. Wir ermutigen alle Benutzer, diese Regeln zu überprüfen und alle Kommentare, die gegen diese Regeln verstoßen, unserem Moderationsteam zu melden👩‍💻."
};

const dictionary_page = { 
    [DICTIONARY_PAGE.TIP]: "Unsere Wörterbuchsuchfunktion schlägt mögliche Übereinstimmungen und Alternativen vor, sodass Sie das gesuchte Wort leicht finden können.",
    [DICTIONARY_PAGE.UNEXISTED_WORD]: "Nicht vorhandenes Wort, bitte überprüfen Sie die Rechtschreibung.",
};

const GER_TRANSLATION_BUILD = new BuildAllTranslationPages(welcome_page, tenses_page, dictionary_page, "GER").buildTranslationObject();

export default GER_TRANSLATION_BUILD;
