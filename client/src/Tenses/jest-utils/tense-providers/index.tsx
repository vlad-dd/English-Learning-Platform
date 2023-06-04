
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeContext } from "../../../Contexts";
import ErrorBoundary from "../../../ErrorBoundary";
import { buildApolloClientInstance } from "../../../test-utils";
import store from "../../../store";
import { IntlProvider } from "react-intl";
import { TRANSLATIONS } from "../../../translations";

const apolloClient = buildApolloClientInstance();

const TenseApplicationProviders = ({ children, ownContextProps }: { children: JSX.Element, ownContextProps?: any }) => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ApolloProvider client={apolloClient}>
          <Provider store={store}>
            <IntlProvider locale="US" messages={TRANSLATIONS["US"]}>
             {children}
            </IntlProvider>
          </Provider>
        </ApolloProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default TenseApplicationProviders;