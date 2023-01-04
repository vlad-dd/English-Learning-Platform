import * as TABLE from './Table/tableData';
import * as PRACTICE from './Practice/db';
import * as CASES from './casesDB';

export const tenseDBRequest = (option) => {
  const tenseData = new Map([
    [
      'Present-Simple',
      [
        {
          columns: TABLE.COLUMNS,
          data: TABLE.PRESENT_SIMPLE_DATA,
          practice: PRACTICE.PRESENT_SIMPLE_PRACTICE,
          cases: CASES.PRESENT_SIMPLE_CASES
        },
      ],
    ],
    [
      'Present-Continuous',
      [
        {
         columns: TABLE.COLUMNS,
         data: TABLE.PRESENT_CONTINUOUS_DATA ,
         practice: PRACTICE.PRESENT_CONTINUOUS_PRACTICE,
         cases: CASES.PRESENT_CONTINUOUS_CASES
        },
      ],
    ],
    [
      'Present-Perfect',
      [
        {
          columns: TABLE.COLUMNS,
          data: TABLE.PRESENT_PERFECT_DATA,
          practice: PRACTICE.PRESENT_PERFECT_PRACTICE
        },
      ],
    ],
    [
      'Present-Perfect-Continuous',
      [
        {
          columns: TABLE.COLUMNS,
          data: TABLE.PRESENT_PERFECT_CONTINUOUS_DATA
        },
      ],
    ],
    [
      'Past-Simple',
      [
        {
          columns: TABLE.COLUMNS,
          data: TABLE.PAST_SIMPLE_DATA
        },
      ],
    ],
    [
      'Past-Continuous',
      [
        {
          columns: TABLE.COLUMNS,
          data: TABLE.PAST_CONTINUOUS_DATA
        },
      ],
    ],
    [
      'Past-Perfect',
      [
        {
          columns: TABLE.COLUMNS,
          data: TABLE.PAST_PERFECT_DATA
        },
      ],
    ],
    [
      'Past-Perfect-Continuous',
      [
        {
          columns: TABLE.COLUMNS,
          data: TABLE.PAST_PERFECT_CONTINUOUS_DATA
        },
      ],
    ],
    [
      'Future-Simple',
      [
        {
           columns: TABLE.COLUMNS,
           data: TABLE.FUTURE_SIMPLE_DATA
        },
      ],
    ],
    [
      'Future-Continuous',
      [
        {
          columns: TABLE.COLUMNS,
          data: TABLE.FUTURE_CONTINUOUS_DATA
        },
      ],
    ],
    [
      'Future-Perfect',
      [
        {
          columns: TABLE.COLUMNS,
          data: TABLE.FUTURE_PERFECT_DATA
        },
      ],
    ],
    [
      'Future-Perfect-Continuous',
      [
        {
          columns: TABLE.COLUMNS,
          data: TABLE.FUTURE_PERFECT_CONTINUOUS_DATA
        },
      ],
    ],
  ]);
  return tenseData.get(option);
};

export default tenseDBRequest;
