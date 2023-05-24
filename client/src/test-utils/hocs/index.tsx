import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import { buildApolloClientInstance } from "..";

export const withApolloProvider = (Component: Function) => {
    const apolloClientInstance = buildApolloClientInstance();
    return (props: Record<string, any>) => <ApolloProvider client={apolloClientInstance} children={<Component {...props} />} />
};

export const withRouterProvider = (Component: Function) => (props: Record<string, any>) => <BrowserRouter children={<Component {...props} />} />

export const withReduxProvider = (Component: Function) => (props: Record<string, any>) => <Provider store={store} children={<Component {...props} />} />