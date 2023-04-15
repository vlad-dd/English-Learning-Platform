import { render, screen } from "@testing-library/react";
import SectionComments from ".";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
});

const Providers = ({ children }: { children: JSX.Element }) => <ApolloProvider client={client} children={children} />;

describe('SectionComments', () => {
    const renderComments = [
        { __typename: 'Comment', id: '1', date: '01.01.2023', comment: 'my comment' }
    ]
    const path1 = 'path1';
    const path2 = 'path2';
    const refetch = jest.fn();
    it('should render component correctly when renderComment exists', () => {
        render(
            <Providers>
                <SectionComments renderComments={renderComments} path1={path1} path2={path2} refetch={refetch} />
            </Providers>
        );
        expect(screen.getByTestId("comment-section")).toBeInTheDocument();
        expect(screen.getByTestId("rich-text-editor")).toBeInTheDocument();
        expect(screen.getByTestId("comments-list")).toBeInTheDocument();
        screen.debug();
    });
    it('should render component correctly when renderComment does not exist', () => {
        render(
            <Providers>
                <SectionComments renderComments={[]} path1={path1} path2={path2} refetch={refetch} />
            </Providers>
        );
        expect(screen.getByTestId("comment-section")).toBeInTheDocument();
        expect(screen.getByTestId("rich-text-editor")).toBeInTheDocument();
        expect(screen.queryByTestId("comments-list")).not.toBeInTheDocument();
    });
})