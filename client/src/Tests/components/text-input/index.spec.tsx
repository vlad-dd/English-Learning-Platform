import React from "react";
import { render, screen } from '@testing-library/react'
import TextInput from ".";
import { ITestItems } from "../../types";
import ErrorBoundary from "antd/lib/alert/ErrorBoundary";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Provider } from "react-redux";
import store from "../../../store";
import { TestContext } from "../../Context";
import { TEXT_INPUT_ID } from "../../constants";

describe('TextInput', () => {

    const client = new ApolloClient({
        uri: "http://localhost:4000",
        cache: new InMemoryCache(),
    });
    
    const TestContextResponse = {
        data: {
            getTests: [{
                __typename: 'typename',
                config: [{
                    __typename: 'config typename',
                    label: 'Mocked Label',
                    correctAnswer: 'Mocked Correct Answer'
                }]
            }]
        }
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

    beforeEach(() => {
        render(<ApplicationProviders><TextInput /></ApplicationProviders>);
    });

    it('should render label', () => {
        const label = screen.getByTestId("text-input-label");
        expect(label.getAttribute("aria-label")).toBe('mixed verbs sentence');
        expect(screen.getByText("Mocked Label")).toBeInTheDocument();
    })

    it('should render input', () => {
        const input = screen.getByTestId(TEXT_INPUT_ID);
        expect(input.getAttribute("class")).toBe('ant-input');
        expect(input.getAttribute("type")).toBe('text');
        expect(input.getAttribute("value")).toBe('');
    });
});