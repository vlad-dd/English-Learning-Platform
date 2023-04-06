
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeContext } from "../../../Contexts";
import ErrorBoundary from "../../../ErrorBoundary";
import store from "../../../store";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const TenseApplicationProviders = ({ children, ownContextProps }: { children: JSX.Element, ownContextProps?: any }) => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <ThemeContext>
              {children}
            </ThemeContext>
          </Provider>
        </ApolloProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default TenseApplicationProviders;