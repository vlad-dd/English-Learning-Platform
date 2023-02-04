//@ts-nocheck
import React from "react";
import { render, screen } from "@testing-library/react";
import TenseContent from "./presentational";
import ErrorBoundary from "../../ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import { ThemeContext } from "../../Contexts";
import * as Hook from './use-tense-configuration';

jest.mock("./use-tense-configuration", () => ({
//   useTenseConfiguration: () => mockedApolloResponse,
    useTenseConfiguration: jest.fn(),
}));

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
      },
    ],
    cases: [
      {
        icon: "mock.png",
        key: "1",
        label: "MockLabel",
        titles: [{ description: "MockDescription" }],
      },
    ],
  },
  loading: false,
  error: false,
};

const tenseContentInnerHTML = [
    'What cases tell us that it is MockTense?',
    'MockTense',
    'MockTip',
    'Sentence building',
    'Type',
    'Affirmative',
    'I/You/We/They',
    'Do',
    'He/She/It',
    'Does'
];

const ApplicationProviders = ({ children }: { children: JSX.Element }) => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeContext>{children}</ThemeContext>
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

describe("TenseContent", () => {
 const tenseConfigurationSpy = jest.spyOn(Hook, 'useTenseConfiguration');
  it("should render TenseContent if data exists", () => {
    tenseConfigurationSpy.mockReturnValue(mockedApolloResponse);
    render(
      <ApplicationProviders>
        <TenseContent />
      </ApplicationProviders>
    );
    tenseContentInnerHTML.forEach((innerHTML) => expect(screen.getByText(innerHTML)).toBeInTheDocument());
    expect(screen.queryAllByText('Noun')[0]).toBeInTheDocument();
    expect(screen.queryAllByText('Auxiliar')[0]).toBeInTheDocument();
  });

  it("should show loading", () => {
    tenseConfigurationSpy.mockReturnValue({...mockedApolloResponse, loading: true});
    render(
      <ApplicationProviders>
        <TenseContent />
      </ApplicationProviders>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it("should show error", () => {
    tenseConfigurationSpy.mockReturnValue({...mockedApolloResponse, error: true});
    render(
      <ApplicationProviders>
        <TenseContent />
      </ApplicationProviders>
    );
    expect(screen.getByText('We have some troubles with request...')).toBeInTheDocument();
  });
});
