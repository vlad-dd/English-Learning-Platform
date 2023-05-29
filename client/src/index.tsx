import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import ErrorBoundary from "./ErrorBoundary";
import store from "./store";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import Root from "./App";
import { buildApolloClientInstance } from "./test-utils";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const apolloClientInstance = buildApolloClientInstance();

root.render(
    <ErrorBoundary>
      <ApolloProvider client={apolloClientInstance}>
        <Provider store={store}>
          <Root />
        </Provider>
      </ApolloProvider>
    </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
