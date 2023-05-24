import { render, screen } from "@testing-library/react";
import { withApolloProvider } from "../../../../../test-utils/hocs";
import ParticularComment from ".";

describe('Pacticular comment', () => {
    const ParticularCommentWithProvider = withApolloProvider(ParticularComment);
    const commentID = "testid";
    const comment = "comment-test";
    it('should render component', () => {
        render(<ParticularCommentWithProvider commentID={commentID} comment={comment}/>);
        expect(screen.getByTestId("comments-container")).toBeInTheDocument();
        expect(screen.getByText(comment)).toBeInTheDocument();
    });
});