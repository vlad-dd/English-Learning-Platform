import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Provider } from "react-redux";
import { render, screen } from '@testing-library/react';
import ErrorBoundary from "../../../ErrorBoundary";
import store from "../../../store";
import { TestContext } from "../../Context";
import SelectInputQuiz from ".";
import { SELECT_INPUT_ID } from "../../constants";

jest.mock('./components/select', () => () => <div data-testid="select-input">Select Input</div>)

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
                id: 1,
                firstPart: 'Mocked First Part',
                secondPart: 'Mocked Second Part',
                options: [{ label: 'Value', value: 'Value' }],
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

describe('SelectInputQuiz', () => {
    it('should render component', () => {
        render(<ApplicationProviders><SelectInputQuiz /></ApplicationProviders>)
        expect(screen.getByText('Select Input')).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_INPUT_ID)).toBeInTheDocument();
        expect(screen.getByText('Mocked First Part')).toBeInTheDocument();
        expect(screen.getByText('Mocked Second Part')).toBeInTheDocument();
    })
})