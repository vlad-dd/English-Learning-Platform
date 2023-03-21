import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { Provider } from "react-redux";
import ErrorBoundary from "../../../ErrorBoundary";
import store from "../../../store";
import { TestContext } from "../../Context";

const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
});

const TestApplicationProviders = ({ children, ownContextResponse }: { children: JSX.Element, ownContextResponse?: any }) => {
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

export default TestApplicationProviders;