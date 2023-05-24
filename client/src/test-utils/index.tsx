import { ApolloClient, ApolloError, InMemoryCache } from "@apollo/client";

export const buildApolloClientInstance = () => {
    return new ApolloClient({
        uri: "http://localhost:4000",
        cache: new InMemoryCache(),
    });
};

export const buildApolloError = (errorMessage?: string) => new ApolloError({ errorMessage });
