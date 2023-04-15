import { render, screen } from "@testing-library/react";
import ParticularComment from ".";
import { size } from "lodash";

const COMMENT_MOCK = [
    { __typename: 'Comment' ,id: '1', date: '1.01.2023', comment: 'test comment'}
];

describe('Pacticular comment', () => {
    const commentID = "testid";
    const comment = "comment-test";
    it('should render component', () => {
        render(<ParticularComment commentID={commentID} comment={comment}/>);
        expect(screen.getByTestId("comments-container")).toBeInTheDocument();
        expect(screen.getByText(comment)).toBeInTheDocument();
        screen.debug();
    });
});