import * as TABLE from './tableData';

export const tenseDBRequest = (option) => {
  const tenseData = new Map([
    [
      "Present-Simple",
      [
        {
          columns: TABLE.COLUMNS,
          data: TABLE.PRESENT_SIMPLE_DATA
        },
      ],
    ],
    [
      "Present-Continuous",
      [
        {
         columns: TABLE.COLUMNS,
         data: TABLE.PRESENT_CONTINUOUS_DATA 
        },
      ],
    ],
    [
      "Present-Perfect",
      [
        {
          columns: TABLE.COLUMNS,
          data: TABLE.PRESENT_PERFECT_DATA
        },
      ],
    ],
    [
      "Present-Perfect-Continuous",
      [
        {
          columns: TABLE.COLUMNS,
          data: TABLE.PRESENT_PERFECT_CONTINUOUS_DATA
        },
      ],
    ],
    [
      "Past-Simple",
      [
        {
          columns: TABLE.COLUMNS,
          data: TABLE.PAST_SIMPLE_DATA
        },
      ],
    ],
    [
      "Past-Continuous",
      [
        {
          columns: TABLE.COLUMNS,
          data: TABLE.PAST_CONTINUOUS_DATA
        },
      ],
    ],
    [
      "Past-Perfect",
      [
        {
          columns: TABLE.COLUMNS,
          data: TABLE.PAST_PERFECT_DATA
        },
      ],
    ],
    [
      "Past-Perfect-Continuous",
      [
        {
          columns: TABLE.COLUMNS,
          data: TABLE.PAST_PERFECT_CONTINUOUS_DATA
        },
      ],
    ],
    [
      "Future-Simple",
      [
        {
           columns: TABLE.COLUMNS,
           data: TABLE.FUTURE_SIMPLE_DATA
        },
      ],
    ],
    [
      "Future-Continuous",
      [
        {
          columns: TABLE.COLUMNS,
          data: TABLE.FUTURE_CONTINUOUS_DATA
        },
      ],
    ],
    [
      "Future-Perfect",
      [
        {
          columns: TABLE.COLUMNS,
          data: TABLE.FUTURE_PERFECT_DATA
        },
      ],
    ],
    [
      "Future-Perfect-Continuous",
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
