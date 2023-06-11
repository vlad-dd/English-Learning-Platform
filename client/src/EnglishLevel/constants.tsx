import { FormattedMessage } from "react-intl";
import { IEnglishLevel } from "./types";
import { ENGLISH_LEVEL_PAGE } from "../translations/constants";

export const ENGLISH_LEVEL_ID = "english-level-wrapper";
export const CLASSIFIED_LEVEL_CONTAINER_DATA_TEST_ID = "classified-level-container";
export const ENGLISH_LEVEL_TITLE_CLASSNAME = "elp-title";

export const ENGLISH_LEVEL_QUIZ = {
    quizTitle: <h1><FormattedMessage id={ENGLISH_LEVEL_PAGE.QUIZ_TITLE} /></h1>,
    quizSynopsis:
        <div>
            <h3><FormattedMessage id={ENGLISH_LEVEL_PAGE.NOTE_ONE} /></h3>
            <h3><FormattedMessage id={ENGLISH_LEVEL_PAGE.NOTE_TWO} /></h3>
            <h3><FormattedMessage id={ENGLISH_LEVEL_PAGE.NOTE_THREE} /></h3>
        </div>
}

export const ENGLISH_LEVELS: IEnglishLevel[] = [
    { min: 0, max: 10, label: 'A0' },
    { min: 11, max: 20, label: 'A1' },
    { min: 21, max: 30, label: 'A2' },
    { min: 31, max: 40, label: 'B1' },
    { min: 41, max: 50, label: 'B2' },
];