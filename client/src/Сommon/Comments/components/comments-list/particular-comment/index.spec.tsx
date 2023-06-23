import { render, screen } from "@testing-library/react";
import { withApolloProvider, withIntlProvider } from "../../../../../test-utils/hocs";
import ParticularComment from ".";
import { COMMENTS_CONTAINER_DATA_TEST_ID } from "../../../constants";

describe('Pacticular comment', () => {
    const ParticularCommentWithProvider = withApolloProvider(withIntlProvider(ParticularComment));
    const commentID = "testid";
    const comment = "comment-test";
    
    it('should render component', () => {
        render(<ParticularCommentWithProvider commentID={commentID} comment={comment}/>);
        expect(screen.getByTestId(COMMENTS_CONTAINER_DATA_TEST_ID)).toBeInTheDocument();
        expect(screen.getByText(comment)).toBeInTheDocument();
    });
});