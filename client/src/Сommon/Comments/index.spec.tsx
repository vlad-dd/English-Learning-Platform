import { render, screen } from "@testing-library/react";
import { withApolloProvider, withIntlProvider, withReduxProvider } from "../../test-utils/hocs";
import SectionComments from ".";
import {
    COMMENTS_LIST_DATA_TEST_ID,
    COMMENT_SECTION_DATA_TEST_ID,
    RICH_TEXT_EDITOR_DATA_TEST_ID
} from "./constants";

describe('SectionComments', () => {
    const renderComments = [
        { __typename: 'Comment', id: '1', date: '01.01.2023', comment: 'my comment', email: "" }
    ];
    const collection = 'path1';
    const document = 'path2';
    const refetch = jest.fn();

    const SectionCommentsWithProvider = withApolloProvider(withReduxProvider(withIntlProvider(SectionComments)));

    it('should render component correctly when renderComment exists', () => {
        render(<SectionCommentsWithProvider renderComments={renderComments} collection={collection} document={document} refetch={refetch} />);
        expect(screen.getByTestId(COMMENT_SECTION_DATA_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(RICH_TEXT_EDITOR_DATA_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(COMMENTS_LIST_DATA_TEST_ID)).toBeInTheDocument();
    });
    it('should render component correctly when renderComment does not exist', () => {
        render(<SectionCommentsWithProvider renderComments={[]} collection={collection} document={document} refetch={refetch} />)
        expect(screen.getByTestId(COMMENT_SECTION_DATA_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(RICH_TEXT_EDITOR_DATA_TEST_ID)).toBeInTheDocument();
        expect(screen.queryByTestId(COMMENTS_LIST_DATA_TEST_ID)).not.toBeInTheDocument();
    });
});