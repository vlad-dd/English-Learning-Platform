import { BuildAllTranslationPages, WelcomePageLanguageTranslationBuilder } from "../translation-builders";

const welcome_page = new WelcomePageLanguageTranslationBuilder(
    "Englisch-Lernplattform",
    "Aktive Benutzer",
    "Unser Ziel 🎯",
    "Unsere Plattform ist darauf ausgelegt, umfassende Ressourcen und Tools bereitzustellen, mit denen Sie Ihre Englischkenntnisse verbessern können.",
    "Immer Up-to-Date 🔄",
    "Unsere Grammatikinformationen und unser Wörterbuch werden regelmäßig aktualisiert, um sicherzustellen, dass Sie Zugriff auf die neuesten und genauesten Informationen haben.",
    "Plattformstruktur 🗂",
    "Schritt 1",
    "Schritt 2",
    "Schritt 3",
    "Schritt 4",
    "Identifizieren Sie Ihr Niveau",
    "Entdecken Sie die Grammatik",
    "Bestehen Sie die Tests",
    "Verwenden Sie das Wörterbuch mit Optionen zum Hören von Wörtern",
    "Wie verwende ich die Englisch-Lernplattform? 🤔",
    "Das Feedback unserer Lernenden🎓",
    "Hallo, ich wollte nur sagen, dass die English Learning Platform für mich ein Lebensretter war. Die Grammatikinformationen sind klar und leicht verständlich und die Tests haben mir geholfen, meine Schwächen zu erkennen und meine Englischkenntnisse zu verbessern."
);

const GER_TRANSLATION_BUILD = new BuildAllTranslationPages(welcome_page, "GER").buildTranslationObject();

export default GER_TRANSLATION_BUILD;
