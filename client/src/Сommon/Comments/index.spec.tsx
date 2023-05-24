import { render, screen } from "@testing-library/react";
import SectionComments from ".";
import { withApolloProvider, withReduxProvider } from "../../test-utils/hocs";

describe('SectionComments', () => {
    const renderComments = [
        { __typename: 'Comment', id: '1', date: '01.01.2023', comment: 'my comment', email: "" }
    ]
    const collection = 'path1';
    const document = 'path2';
    const refetch = jest.fn();

    const SectionCommentsWithProvider = withApolloProvider(withReduxProvider(SectionComments));

    it('should render component correctly when renderComment exists', () => {
        render(<SectionCommentsWithProvider renderComments={renderComments} collection={collection} document={document} refetch={refetch} />);
        expect(screen.getByTestId("comment-section")).toBeInTheDocument();
        expect(screen.getByTestId("rich-text-editor")).toBeInTheDocument();
        expect(screen.getByTestId("comments-list")).toBeInTheDocument();
    });
    it('should render component correctly when renderComment does not exist', () => {
        render(<SectionCommentsWithProvider renderComments={[]} collection={collection} document={document} refetch={refetch} />)
        expect(screen.getByTestId("comment-section")).toBeInTheDocument();
        expect(screen.getByTestId("rich-text-editor")).toBeInTheDocument();
        expect(screen.queryByTestId("comments-list")).not.toBeInTheDocument();
    });
})