import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import ErrorBoundary from "./ErrorBoundary";
import store from "./store";
import { ThemeContext } from "./Contexts";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import Root from "./App";
import { buildApolloClientInstance } from "./test-utils";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const ApolloClientInstance = buildApolloClientInstance();

root.render(
  <ErrorBoundary>
      <ApolloProvider client={ApolloClientInstance}>
        <Provider store={store}>
          <ThemeContext>
            <Root />
          </ThemeContext>
        </Provider>
      </ApolloProvider>
  </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
