import React from "react";
import { render, screen } from '@testing-library/react'
import TestApplication from "./presentational";
import TestApplicationContext, { TestContext } from "./Context";
import { Provider } from "react-redux";
import store from "../store";
import ErrorBoundary from "../ErrorBoundary";
import { ApolloClient, ApolloError, ApolloProvider, InMemoryCache } from "@apollo/client";
import { TEXT_INPUT_ID } from "./components/constants";

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
    it('should render text input units', () => {
        render(<ApplicationProviders><TestApplication /></ApplicationProviders>)
        const input = screen.getByTestId(TEXT_INPUT_ID);
        expect(screen.getByText("Mocked Label")).toBeInTheDocument();
        expect(input.getAttribute("id")).toBe(TEXT_INPUT_ID);
        expect(input.getAttribute("class")).toBe("ant-input");
        expect(input.getAttribute("value")).toBe("")
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