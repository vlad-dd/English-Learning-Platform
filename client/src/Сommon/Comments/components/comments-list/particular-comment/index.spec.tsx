import { ApolloProvider } from "@apollo/client";
import { render, screen } from "@testing-library/react";
import { buildApolloClientInstance } from "../../../../../test-utils";
import ParticularComment from ".";

const apolloClientInstance = buildApolloClientInstance();

const Providers = ({ children }: { children: JSX.Element }) => <ApolloProvider client={apolloClientInstance} children={children} />

describe('Pacticular comment', () => {
    const commentID = "testid";
    const comment = "comment-test";
    it('should render component', () => {
        render(<Providers><ParticularComment commentID={commentID} comment={comment}/></Providers>);
        expect(screen.getByTestId("comments-container")).toBeInTheDocument();
        expect(screen.getByText(comment)).toBeInTheDocument();
    });
});