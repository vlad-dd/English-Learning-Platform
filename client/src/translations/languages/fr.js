import { APPLICATION_MODALS, APPLICATION_ROOT, DICTIONARY_PAGE, ENGLISH_LEVEL_PAGE, GRAMMAR_LEVELS, SUPPORT_TEAM, TENSES_PAGE, WELCOME_PAGE } from "../constants";
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

const tenses_page = {
    [TENSES_PAGE.COMMON_TENSES_TITLE]: "Quels cas nous disent que c'est",
    [TENSES_PAGE.EXAMPLES_TITLE]: "Exemples",
    [TENSES_PAGE.SENTENCE_BUILDING]: "Construction de phrases",
    [TENSES_PAGE.PRACTICE_TITLE]: "Pratique",
    [TENSES_PAGE.СOMMENTS_TITLE]: "Commentaires",
    [TENSES_PAGE.COMMENTS_POLICY_RULES_TITLE]: "Politique de la plateforme d'apprentissage de l'anglais 📜",
    [TENSES_PAGE.COMMENTS_POLICY_RULES_PART_ONE]: "Dans le cadre de notre politique, nous n'autorisons pas les commentaires qui incluent l'un des éléments suivants:",
    [TENSES_PAGE.COMMENTS_POLICY_RULES_PART_TWO]: "Nous prenons ces règles au sérieux afin de maintenir une communauté sûre et respectueuse pour tous les utilisateurs. Les commentaires qui enfreignent ces règles peuvent être supprimés et les récidivistes peuvent être bannis de la plateforme. Nous encourageons tous les utilisateurs à consulter ces règles et à signaler tout commentaire qui les enfreint à notre équipe de modération👩‍💻.",
    [TENSES_PAGE.COMMENTS_POLICY_RULES_SUBMIT_BUTTON]: "J'ai compris!",
    [TENSES_PAGE.COMMENTS_COUNT_TITLE]: "Commentaires",
    [TENSES_PAGE.REPORT_PARTICULAR_COMMENT_BUTTON]: "Rapport",
    [TENSES_PAGE.REPORT_COMMENT_DIALOG_TITLE]: "Signaler un commentaire inapproprié👮‍♀️",
    [TENSES_PAGE.REPORT_COMMENT_DIALOG_DESCRIPTION]: "Notre fonction de signalement des commentaires facile à utiliser vous permet de signaler rapidement et facilement tout commentaire qui ne correspond pas à notre politique de plateforme d'apprentissage de l'anglais. Nous voulons nous assurer que notre plateforme est un espace sûr et respectueux pour tous les utilisateurs, et nous comptons sur votre aide pour atteindre cet objectif.",
    [TENSES_PAGE.ADD_COMMENT_BUTTON]: "Envoyer"
};

const dictionary_page = {
    [DICTIONARY_PAGE.TIP]: "Notre fonction de recherche dans le dictionnaire vous proposera des correspondances et des alternatives possibles, afin que vous puissiez facilement trouver le mot que vous recherchez.",
    [DICTIONARY_PAGE.UNEXISTED_WORD]: "Mot inexistant, merci de vérifier l'orthographe.",
    [DICTIONARY_PAGE.PRONUNCIATION_TITLE]: "Prononciation",
    [DICTIONARY_PAGE.UNEXISTED_SOUND]: "Il n'y a pas de fichier audio pour ce mot",
    [DICTIONARY_PAGE.SEARCH_BUTTON]: "Recherche",
    [DICTIONARY_PAGE.TRANSCRIPTION]: "Transcription"
};

const english_level_page = {
    [ENGLISH_LEVEL_PAGE.TITLE]: "Test de niveau de compétence en anglais",
    [ENGLISH_LEVEL_PAGE.LEVEL]: "Votre niveau d'anglais est",
    [ENGLISH_LEVEL_PAGE.QUIZ_TITLE]: "Salutations et bienvenue à l'évaluation des compétences en anglais ! 🌍",
    [ENGLISH_LEVEL_PAGE.NOTE_ONE]: "✅ Veuillez essayer toutes les questions.",
    [ENGLISH_LEVEL_PAGE.NOTE_TWO]: "👀 L'évaluation n'a pas de limite de temps.",
    [ENGLISH_LEVEL_PAGE.NOTE_THREE]: "🤷🏽 Si vous n'êtes pas sûr de la réponse, veuillez sélectionner la réponse qui, selon vous, pourrait être vraie."
};

const support_team = {
    [SUPPORT_TEAM.SEND_REPORT_MODAL_TITLE]: "Signaler le problème👷‍♂️",
    [SUPPORT_TEAM.SEND_REPORT_MODAL_FEEDBACK_TITLE]: "Votre rapport a été envoyé avec succès !",
    [SUPPORT_TEAM.SEND_REPORT_MODAL_NUMBER]: "Signaler le numéro:",
    [SUPPORT_TEAM.SEND_REPORT_MODAL_THANK_MESSAGE]: "Merci d'avoir rendu notre service meilleur !",
    [SUPPORT_TEAM.SEND_REPORT_SUBMIT_BUTTON]: "Envoyer",
    [SUPPORT_TEAM.SEND_REPORT_INPUT_MIN_LENGTH_ERROR_DATA_TEST_ID]: "Vous devez écrire au moins 10 symboles !",
    [SUPPORT_TEAM.SEND_REPORT_INPUT_MAX_LENGTH_ERROR_DATA_TEST_ID]: "Vous avez atteint le maximum de symboles !"
};

const user_profile_modal = {
    [APPLICATION_MODALS.REPORT_USER_PROFILE_MODAL_TITLE]: "Signaler un utilisateur inapproprié👮‍♀️",
    [APPLICATION_MODALS.REPORT_USER_PROFILE_MODAL_DESCRIPTION]: "Notre fonctionnalité de plainte des utilisateurs vous permet de signaler tout comportement ou contenu qui, selon vous, enfreint nos politiques de la plate-forme d'apprentissage de l'anglais. Nous prenons toutes les plaintes au sérieux et nous nous efforçons de faire en sorte que notre plateforme soit un espace sûr et accueillant pour tous les utilisateurs.",
    [APPLICATION_MODALS.PROFILE_MODAL_CLOSE_BUTTON]: "Fermer"
};

const application_modals = {
    ...user_profile_modal
};

const application_root = {
    ...application_modals,
    [APPLICATION_ROOT.FOOTER_AUTHOR_INFORMATION]: "Plateforme d'apprentissage de l'anglais ©2022 Créé par"
};

const grammar_levels = {
    [GRAMMAR_LEVELS.EXPLANATION]: "Explication de",
    [GRAMMAR_LEVELS.USE_CASES]: "Cas d'utilisation pour",
    [GRAMMAR_LEVELS.CONSOLIDATION_OF_KNOWLEDGE]: "Consolidation des connaissances"
};

const FR_TRANSLATION_BUILD = new BuildAllTranslationPages(
    welcome_page,
    tenses_page,
    dictionary_page,
    english_level_page,
    support_team,
    application_root,
    grammar_levels,
    "FR").buildTranslationObject();

export default FR_TRANSLATION_BUILD;