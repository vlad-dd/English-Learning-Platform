import { IStatus } from "./Carousel/types";

export const PRACTICE_TITLE_DATA_TEST_ID = "tense_practice";
export const CAROUSEL_QUIZ_DATA_TEST_ID = "carousel-quiz";
export const ALERT_BANNER_DATA_TEST_ID = "alert-banner";
export const DEFAULT_CAROUSEL_INPUT_DATA_TEST_ID = "practice-input";
export const QUESTION_CAROUSEL_INPUT_DATA_TEST_ID = "question-input";
export const MOST_COMMON_CASES_TITLE_ID = "common_tenses_title";
export const EXAMPLES_TITLE_ID = "tense_examples";
export const EXAMPLE_TITLE_DATA_TEST_ID = "title-component-id";
export const TABLE_TITLE_ID = "tenses_sentence_building";

export const COLUMNS = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (text: string) => <p style={{ color: '#a5a5d3' }}>{text}</p>,
    },
    {
      title: 'Noun',
      dataIndex: 'noun',
      key: 'noun',
    },
    {
      title: 'Auxiliar',
      dataIndex: 'auxiliar',
      key: 'auxiliar',
    },
    {
      title: 'Noun',
      dataIndex: 'noun_1',
      key: 'noun_1',
    },
    {
      title: 'Auxiliar',
      dataIndex: 'auxiliar_1',
      key: 'auxiliar_1',
    },
];

export const BORDER_STATUS: IStatus = {
  CORRECT: '1px solid green',
  UNCORRECT: '1px solid red',
  DEFAULT: '1px solid gainsboro',
};

export const ALERT_STATUS = {
  CORRECT: 'CORRECT',
  UNCORRECT: 'UNCORRECT',
  LAST: 'LAST',
};

export const ALERT_MESSAGES = { 
  CORRECT: "Correct answer!",
  UNCORRECT: "Wrong answer, try again!",
  LAST: "Correct, you have passed an assignment🎉!"
};