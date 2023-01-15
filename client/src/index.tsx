import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ErrorBoundary from "./ErrorBoundary";
import store from "./store";
import { ThemeContext } from "./Contexts";
import "./index.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetLocations {
        countOfTenses {
          tense
        }
      }
    `,
  })
  .then((result) => console.log('Apollo: ', result));

root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <ThemeContext>
            <App />
          </ThemeContext>
        </Provider>
      </ApolloProvider>
    </BrowserRouter>
  </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
