import React from "react";
import { render, screen, waitFor } from '@testing-library/react'
import TestApplication from "./presentational";
import TestApplicationContext, { TestContext } from "./Context";
import { Provider } from "react-redux";
import store from "../store";
import ErrorBoundary from "../ErrorBoundary";
import { ApolloClient, ApolloError, ApolloProvider, InMemoryCache } from "@apollo/client";
import { PARTIAL_TEXT_INPUT_ID, SELECT_INPUT_ID, TEXT_INPUT_ID } from "./constants";
import { get } from "lodash";

jest.mock('./components/text-input', () => () => <div data-testid='text-input'>Text Input</div>);
jest.mock('./components/select-input', () => () => <div data-testid='select-input'>Select Input</div>);
jest.mock('./components/partial-text-input', () => () => <div data-testid='partial-text-input'>Partial Input</div>);

const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
});

const TestContextResponse = {
    data: {
        getTests: [{
            __typename: 'typename',
            type: 'default',
            config: [{
                __typename: 'config typename',
                label: 'Mocked Label',
                correctAnswer: 'Mocked Correct Answer'
            }]
        }]
    },
    isLoading: false,
    error: undefined
}

const ApplicationProviders = ({ children, ownContextResponse = TestContextResponse }: { children: JSX.Element, ownContextResponse?: any }) => {
    return (
        <ErrorBoundary>
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <TestContext.Provider value={ownContextResponse}>
                        {children}
                    </TestContext.Provider>
                </Provider>
            </ApolloProvider>
        </ErrorBoundary>
    );
};

describe('TestApplication', () => {
    const config = get(TestContextResponse, 'data.getTests[0]');

    const changeConfigType = (type: string) => ({ getTests: [ { ...config, type } ] });

    it('should render text input units', () => {
        render(<ApplicationProviders><TestApplication /></ApplicationProviders>)
        expect(screen.getByTestId(TEXT_INPUT_ID)).toBeInTheDocument();
        expect(screen.getByText("Text Input")).toBeInTheDocument();
    });

    it('should render select input units', () => {
        render(<ApplicationProviders ownContextResponse={{ ...TestContextResponse, data: changeConfigType('select') }}><TestApplication/></ApplicationProviders>)
        expect(screen.getByTestId(SELECT_INPUT_ID)).toBeInTheDocument();
        expect(screen.getByText("Select Input")).toBeInTheDocument();
    });

    it('should render partial input units', () => {
        render(<ApplicationProviders ownContextResponse={{ ...TestContextResponse, data: changeConfigType('partial') }}><TestApplication/></ApplicationProviders>);
        expect(screen.getByTestId(PARTIAL_TEXT_INPUT_ID)).toBeInTheDocument();
        expect(screen.getByText("Partial Input")).toBeInTheDocument();
    });

    it('should render loading sign', () => {
        render(
            <ApplicationProviders ownContextResponse={{ ...TestApplicationContext, isLoading: true }}>
                <TestApplication />
            </ApplicationProviders>)
        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it('should render error message', () => {
        render(
            <ApplicationProviders ownContextResponse={{ ...TestApplicationContext, error: new ApolloError({}) }}>
                <TestApplication />
            </ApplicationProviders>)
        expect(screen.getByText("We have some troubles with request...")).toBeInTheDocument();
    });
});