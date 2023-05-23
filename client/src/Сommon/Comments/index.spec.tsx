import { render, screen } from "@testing-library/react";
import SectionComments from ".";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import store from "../../store";
import { buildApolloClientInstance } from "../../test-utils";

const apolloClientInstance = buildApolloClientInstance();

const Providers = ({ children }: { children: JSX.Element }) => <Provider store={store}><ApolloProvider client={apolloClientInstance} children={children} /></Provider>;

describe('SectionComments', () => {
    const renderComments = [
        { __typename: 'Comment', id: '1', date: '01.01.2023', comment: 'my comment', email: "" }
    ]
    const collection = 'path1';
    const document = 'path2';
    const refetch = jest.fn();
    it('should render component correctly when renderComment exists', () => {
        render(
            <Providers>
                <SectionComments renderComments={renderComments} collection={collection} document={document} refetch={refetch} />
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
                <SectionComments renderComments={[]} collection={collection} document={document} refetch={refetch} />
            </Providers>
        );
        expect(screen.getByTestId("comment-section")).toBeInTheDocument();
        expect(screen.getByTestId("rich-text-editor")).toBeInTheDocument();
        expect(screen.queryByTestId("comments-list")).not.toBeInTheDocument();
    });
})