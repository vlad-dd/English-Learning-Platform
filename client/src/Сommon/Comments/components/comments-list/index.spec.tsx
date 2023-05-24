import { render, screen } from "@testing-library/react";
import { size } from "lodash";
import CommentsList from ".";
import { withApolloProvider } from "../../../../test-utils/hocs";

const COMMENT_MOCK = [
    { __typename: 'Comment' ,id: '1', date: '1.01.2023', comment: 'test comment', email: "mock@gmail.com"}
];

describe('Comments list', () => {
    const CommentsListWithProvider = withApolloProvider(CommentsList);

    it('should render component with logged user', () => {
        render(<CommentsListWithProvider comments={COMMENT_MOCK} />);
        expect(screen.getByTestId("comments-list")).toBeInTheDocument();
        COMMENT_MOCK.forEach(({ date, comment, email }) => {
            expect(screen.getByText(date)).toBeInTheDocument();
            expect(screen.getByText(comment)).toBeInTheDocument();
            expect(screen.getByText(email)).toBeInTheDocument();
        });
    })
    it('should render component without logged user as visitor', () => {
        render(<CommentsListWithProvider comments={[{...COMMENT_MOCK[0], email: undefined}]} />);
        expect(screen.getByTestId("comments-list")).toBeInTheDocument();
        COMMENT_MOCK.forEach(({ date, comment, email }) => {
            expect(screen.getByText(date)).toBeInTheDocument();
            expect(screen.getByText(comment)).toBeInTheDocument();
            expect(screen.getByText("Visitor")).toBeInTheDocument();
        });
    });
    it('should render report comment button', () => {
        render(<CommentsListWithProvider comments={[{...COMMENT_MOCK[0], email: undefined}]} />);
        const buttons = screen.queryAllByRole("button");
        const lastButton = buttons[size(buttons) - 1].innerHTML;
        expect(lastButton).toBe('Report');
    });
})