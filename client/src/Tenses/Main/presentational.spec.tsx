import { fireEvent, render, screen } from "@testing-library/react";
import TenseContent from "./presentational";
import * as TenseConfig from './use-tense-configuration';
import { buildApolloError } from "../../test-utils";
import { withApolloProvider, withIntlProvider, withReduxProvider, withRouterProvider } from "../../test-utils/hocs";

const mockedApolloResponse = {
  data: {
    countOfTenses: [{
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
      ],
      comments: [
        { __typename: 'Comments', id: '1', date: '5.03.2023', comment: "here is my comment"}
      ]
    }]},
  loading: false,
  error: undefined,
  refetch: jest.fn()
};

const tenseContentInnerHTML = [
  'What cases tell us that it is MockTense?',
  'MockTense',
  'MockTip',
  'Sentence building',
  'Type',
  'I/You/We/They',
  'Do',
  'He/She/It',
  'Does'
];

const TenseContentWithProvider = withRouterProvider(withApolloProvider(withReduxProvider(withIntlProvider(TenseContent))));

describe("TenseContent", () => {
  const spy = jest.spyOn(TenseConfig, "useTenseConfigurationWidget");

  describe('when configuration exists', () => {
     
    beforeEach(() => {
      spy.mockReturnValue(mockedApolloResponse)
      render(<TenseContentWithProvider />);
    })

    it("should render TenseContent if data exists", () => {
      tenseContentInnerHTML.forEach((innerHTML) => expect(screen.getByText(innerHTML)).toBeInTheDocument());
      expect(screen.queryAllByText('Noun')[0]).toBeInTheDocument();
      expect(screen.queryAllByText('Auxiliar')[0]).toBeInTheDocument();
    });

    it("should render cases", () => {
      expect(screen.getByText('MockLabel')).toBeInTheDocument();
      expect(screen.getByText('MockDescription')).toBeInTheDocument();
      fireEvent.click(screen.getByText('Another Mock Label'));
      expect(screen.getByText('Another Mock Description')).toBeInTheDocument();
    });

    it("should render example panels", () => {
      expect(screen.getByText('Examples')).toBeInTheDocument();
      expect(screen.getByText('Example Header Mock')).toBeInTheDocument();
      fireEvent.click(screen.getByText('Example Header Mock'));
      expect(screen.getByText('Example Sentence Mock')).toBeInTheDocument();
    });

    it("should render practice carousel", () => {
      expect(screen.getByText('Mocked Part One')).toBeInTheDocument();
      expect(screen.getByTestId('practice-input')).toBeInTheDocument();
      fireEvent.change(screen.getByTestId('practice-input'), { target: { value: 'Mocked Missed Correct Value' } });
      expect(screen.getByTestId('practice-input').getAttribute('value')).toBe('Mocked Missed Correct Value');
      fireEvent.keyDown(screen.getByTestId('practice-input'), { key: 'Enter' });
      expect(screen.getByTestId('practice-input').getAttribute('disabled')).toBe("");
    });

    it("should render comment section", () => {
      expect(screen.getByTestId('comment-section')).toBeInTheDocument();
      expect(screen.getByTestId('rich-text-editor')).toBeInTheDocument();
      expect(screen.getByTestId('comments-count')).toBeInTheDocument();
      expect(screen.getByTestId('comments-rule-section')).toBeInTheDocument();
    });
  })

  it("should show loading", () => {
    spy.mockReturnValue({ ...mockedApolloResponse, loading: true })
    render(<TenseContentWithProvider />);
    expect(screen.getByTestId('loading-progress')).toBeInTheDocument();
  });

  it("should show error", () => {
    spy.mockReturnValue({ ...mockedApolloResponse, error: buildApolloError() });
    render(<TenseContentWithProvider />);
    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  });
});
