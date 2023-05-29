import { BuildAllTranslationPages, WelcomePageLanguageTranslationBuilder } from "../translation-builders";

const welcome_page = new WelcomePageLanguageTranslationBuilder(
    "Plateforme d'apprentissage de l'anglais",
    "Utilisateurs actifs",
    "Notre objectif 🎯",
    "Notre plateforme est conçue pour fournir des ressources et des outils complets qui vous aideront à améliorer votre maîtrise de la langue anglaise.",
    "Toujours à jour 🔄",
    "Nos informations grammaticales et notre dictionnaire sont régulièrement mis à jour pour garantir que vous avez accès aux informations les plus récentes et les plus précises.",
    "Structure de la plate-forme 🗂",
    "Étape 1",
    "Étape 2",
    "Étape 3",
    "Étape 4",
    "Identifiez votre niveau",
    "Explorer la grammaire",
    "Passer les tests",
    "Utilisez le dictionnaire avec des options d'écoute de mots",
    "Comment utiliser la plate-forme d'apprentissage de l'anglais ? 🤔",
    "Les retours de nos apprenants🎓",
    "Salut, je voulais juste dire que la plate-forme d'apprentissage de l'anglais m'a sauvé la vie. Les informations grammaticales sont claires et faciles à comprendre, et les tests m'ont aidé à identifier mes faiblesses et à améliorer mes compétences en anglais."
);

const FR_TRANSLATION_BUILD = new BuildAllTranslationPages(welcome_page, "FR").buildTranslationObject();

export default FR_TRANSLATION_BUILD;