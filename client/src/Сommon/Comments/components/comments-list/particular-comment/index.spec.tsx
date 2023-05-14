import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { render, screen } from "@testing-library/react";
import ParticularComment from ".";

const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
  });

const Providers = ({ children }: { children: JSX.Element }) => <ApolloProvider client={client} children={children} />

describe('Pacticular comment', () => {
    const commentID = "testid";
    const comment = "comment-test";
    it('should render component', () => {
        render(<Providers><ParticularComment commentID={commentID} comment={comment}/></Providers>);
        expect(screen.getByTestId("comments-container")).toBeInTheDocument();
        expect(screen.getByText(comment)).toBeInTheDocument();
    });
});