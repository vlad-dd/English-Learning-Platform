import { render, screen } from "@testing-library/react";
import CommentsList from ".";
import { size } from "lodash";

const COMMENT_MOCK = [
    { __typename: 'Comment' ,id: '1', date: '1.01.2023', comment: 'test comment'}
];

describe('Comments list', () => {
    it('should render component', () => {
        render(<CommentsList comments={COMMENT_MOCK} />);
        expect(screen.getByTestId("comments-list")).toBeInTheDocument();
        COMMENT_MOCK.forEach(({ date, comment }) => {
            expect(screen.getByText(date)).toBeInTheDocument();
            expect(screen.getByText(comment)).toBeInTheDocument();
        });
        const buttons = screen.queryAllByRole("button");
        const lastButton = buttons[size(buttons) - 1].innerHTML;
        expect(lastButton).toBe('Report');
    })
})