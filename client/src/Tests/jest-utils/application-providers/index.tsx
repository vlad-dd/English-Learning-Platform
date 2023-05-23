import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import ErrorBoundary from "../../../ErrorBoundary";
import store from "../../../store";
import { TestContext } from "../../Context";
import { BrowserRouter } from "react-router-dom";
import { buildApolloClientInstance } from "../../../test-utils";

const apolloClientInstance = buildApolloClientInstance();

const TestApplicationProviders = ({ children, ownContextResponse }: { children: JSX.Element, ownContextResponse?: any }) => {
    return (
        <BrowserRouter>
            <ErrorBoundary>
                <ApolloProvider client={apolloClientInstance}>
                    <Provider store={store}>
                        <TestContext.Provider value={ownContextResponse}>
                            {children}
                        </TestContext.Provider>
                    </Provider>
                </ApolloProvider>
            </ErrorBoundary>
        </BrowserRouter>
    );
};

export default TestApplicationProviders;