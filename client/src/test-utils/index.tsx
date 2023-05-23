import { ApolloClient, InMemoryCache } from "@apollo/client";

export const buildApolloClientInstance = () => {
    return new ApolloClient({
        uri: "http://localhost:4000",
        cache: new InMemoryCache(),
    });
};
