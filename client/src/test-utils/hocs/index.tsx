import { ApolloProvider } from "@apollo/client";
import { buildApolloClientInstance } from "..";

export const withApolloProvider = (Component: any) => {
    const apolloClientInstance = buildApolloClientInstance();
    return (props: any) => <ApolloProvider client={apolloClientInstance} children={<Component {...props} />} />
};