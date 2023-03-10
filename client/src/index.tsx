import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import ErrorBoundary from "./ErrorBoundary";
import store from "./store";
import { ThemeContext } from "./Contexts";
import "./index.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import Root from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

root.render(
  <ErrorBoundary>
      <ApolloProvider client={client}>
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
