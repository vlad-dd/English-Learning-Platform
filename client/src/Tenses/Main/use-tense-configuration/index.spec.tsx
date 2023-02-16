import { MockedProvider } from "@apollo/client/testing";
import { act, renderHook, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { useTenseConfiguration } from ".";
import store from "../../../store";
import { GET_TENSE } from "../../graphql";

const mockedApolloResponse = {
  data: {
    countOfTenses: [
      {
        tense: "MockTense",
        tableData: {
          tip: "MockTip",
          table: [
            {
              key: "1",
              type: "Affirmative",
              noun: "I/You/We/They",
              auxiliar: "Do",
              noun_1: "He/She/It",
              auxiliar_1: "Does",
            },
          ],
        },
        cases: [
          {
            icon: "mock.png",
            key: "1",
            label: "MockLabel",
            titles: [{ description: "MockDescription" }],
          },
          {
            icon: "mock_1.png",
            key: "2",
            label: "Another Mock Label",
            titles: [{ description: "Another Mock Description" }],
          }
        ],
        examples: [
          {
            key: 1,
            header: 'Example Header Mock',
            icon: 'example-icon.png',
            sentences: [
              {
                id: 1,
                sentence: 'Example Sentence Mock'
              }
            ]
          },
        ],
        practice: [
          {
            sentences: [
              {
                id: 1,
                label: 'Affirmative',
                partOne: 'Mocked Part One',
                partTwo: 'Mocked Part Two',
                missed: 'Mocked Missed Correct Value'
              }
            ]
          }
        ]
      },
    ],
  },
  loading: false,
  error: false,
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: () => ({ path: ['Present-Simple'] })
}))

const mocks = [
  {
    request: {
      query: GET_TENSE,
      variables: {
        tense: "Present-Simple",
      },
    },
    result: mockedApolloResponse,
  },
];

const ApplicationProviders = ({ children }: { children: JSX.Element }) => {
  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      <Provider store={store}>
        {children}
      </Provider>
    </MockedProvider>
  );
};

const getMockedTensePart = (mockedResponse: any) => mockedResponse.result.current.data.countOfTenses[0];


describe('useTenseConfiguration', () => {
  let config: any;

  beforeEach(() => {
    config = renderHook(() => useTenseConfiguration(), { wrapper: ApplicationProviders });

  });

  it('should render cases', async () => {
    await waitFor(() => {
      const { cases } = getMockedTensePart(config)
      expect(cases).toStrictEqual(mockedApolloResponse.data.countOfTenses[0].cases)
    });
  });

  it('should render tense and table data', async () => {
    await waitFor(() => {
    const { tense, tableData } = getMockedTensePart(config);
    const { tip, table } = tableData;
    expect(tense).toBe(mockedApolloResponse.data.countOfTenses[0].tense)
    expect(tip).toBe(mockedApolloResponse.data.countOfTenses[0].tableData.tip)
    expect(table).toStrictEqual(mockedApolloResponse.data.countOfTenses[0].tableData.table)
    });
});

it('should render practice', async () => {
  await waitFor(() => {
    const { practice } = getMockedTensePart(config)
    expect(practice).toStrictEqual(mockedApolloResponse.data.countOfTenses[0].practice)
  });
});

it('should render examples', async () => {
  await waitFor(() => {
    const { examples } = getMockedTensePart(config)
    expect(examples).toStrictEqual(mockedApolloResponse.data.countOfTenses[0].examples)
  });
});

});