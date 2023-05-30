import { WELCOME_PAGE } from "../constants";
import { BuildAllTranslationPages } from "../translation-builders";

const welcome_page = {
    [WELCOME_PAGE.TITLE]: "Plateforme d'apprentissage de l'anglais",
    [WELCOME_PAGE.ACTIVE_USERS_COUNT]: "Utilisateurs actifs",
    [WELCOME_PAGE.CARD_GOAL_TITLE]: "Notre objectif 🎯",
    [WELCOME_PAGE.CARD_GOAL_BODY]: "Notre plateforme est conçue pour fournir des ressources et des outils complets qui vous aideront à améliorer votre maîtrise de la langue anglaise.",
    [WELCOME_PAGE.CARD_UP_TO_DATE_TITLE]: "Toujours à jour 🔄",
    [WELCOME_PAGE.CARD_UP_TO_DATE_BODY]: "Nos informations grammaticales et notre dictionnaire sont régulièrement mis à jour pour garantir que vous avez accès aux informations les plus récentes et les plus précises.",
    [WELCOME_PAGE.CARD_STRUCTURE_TITLE]: "Structure de la plate-forme 🗂",
    [WELCOME_PAGE.STEP_ONE]: "Étape 1",
    [WELCOME_PAGE.STEP_TWO]: "Étape 2",
    [WELCOME_PAGE.STEP_THREE]: "Étape 3",
    [WELCOME_PAGE.STEP_FOUR]: "Étape 4",
    [WELCOME_PAGE.GUIDELINE_TITLE]: "Comment utiliser la plate-forme d'apprentissage de l'anglais ? 🤔",
    [WELCOME_PAGE.STEP_ONE_DESCRIPTION]: "IIdentifiez votre niveau",
    [WELCOME_PAGE.STEP_TWO_DESCRIPTION]: "Explorer la grammaire",
    [WELCOME_PAGE.STEP_THREE_DESCRIPTION]: "Passer les tests",
    [WELCOME_PAGE.STEP_FOUR_DESCRIPTION]: "Utilisez le dictionnaire avec des options d'écoute de mots",
    [WELCOME_PAGE.FEEDBACKS_TITLE]: "Les retours de nos apprenants🎓",
    [WELCOME_PAGE.FEEDBACK_ONE]: "Salut, je voulais juste dire que la plate-forme d'apprentissage de l'anglais m'a sauvé la vie. Les informations grammaticales sont claires et faciles à comprendre, et les tests m'ont aidé à identifier mes faiblesses et à améliorer mes compétences en anglais.",
    [WELCOME_PAGE.FEEDBACK_TWO]: "Le dictionnaire avec des options d'écoute de mots m'a été très utile, car il me permet d'entendre comment les mots sont prononcés par des locuteurs natifs. Je recommanderais certainement cette plateforme à tous ceux qui cherchent à améliorer leur anglais.",
    [WELCOME_PAGE.FEEDBACK_THREE]: "J'utilise la plate-forme d'apprentissage de l'anglais depuis quelques semaines maintenant. Les tests pour chaque thème sont vraiment utiles, car ils me permettent de mettre en pratique ce que j'ai appris et de suivre mes progrès. J'apprécie l'effort qui a été consacré à la création cette plateforme.",
    [WELCOME_PAGE.FEEDBACK_FOUR]: "Le fait qu'il existe des tests d'apprentissage est également une fonctionnalité intéressante, car cela me permet de me concentrer sur des domaines spécifiques avec lesquels j'ai du mal. Dans l'ensemble, je suis très satisfait de cette plateforme.",
};

const FR_TRANSLATION_BUILD = new BuildAllTranslationPages(welcome_page, "FR").buildTranslationObject();

export default FR_TRANSLATION_BUILD;