/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { reducer, actions as TensesActions, initialState } from ".";

const tenseMock = [
  {
    tense: "Mock Tense",
    tableData: [
      {
        tip: "Mock Tip",
        table: [
          {
            key: "1",
            type: "Mock Type",
            noun: "Mock Noun",
            noun_1: "Mock noun_1",
            auxiliar: "Mock Auxiliar",
            auxiliar_1: "Mock Auxiliar_1",
          },
        ],
      },
    ],
    cases: [
      {
        key: "1",
        label: "Cases Label",
        icon: "test.png",
        titles: [
          {
            description: "Cases Description",
          },
        ]!,
      },
    ],
    examples: [
      {
        key: 1,
        header: "Mock Example Header",
        icon: "mock-example-icon.png",
        sentences: [
          {
            id: 1,
            sentence: "Mock Example Sentence",
          },
        ],
      },
    ],
    practice: [
      {
        sentences: [
          {
            id: 1,
            label: "Mock Practice Label",
            missed: "Mock Practice Missed",
            partOne: "Mock Practice Part One",
            partTwo: "Mock Practice Part Two",
          },
        ],
      },
    ],
  },
];

describe("Tenses Slice", () => {
  it("should initialize the state in right way", () => {
    const initialAction = { type: "initial", payload: {} };
    const nextState = reducer(initialState, initialAction);
    expect(nextState).toEqual(initialState);
  });

  it("should set tense configuration", () => {
    const nextState = reducer(initialState,TensesActions.setTenseConfiguration(tenseMock));
    expect(nextState).toHaveProperty('tenseConfiguration', tenseMock)
  });
});
