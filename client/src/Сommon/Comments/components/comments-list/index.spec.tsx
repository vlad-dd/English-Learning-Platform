import { ApolloProvider } from "@apollo/client";
import { render, screen } from "@testing-library/react";
import { size } from "lodash";
import CommentsList from ".";
import { buildApolloClientInstance } from "../../../../test-utils";

const COMMENT_MOCK = [
    { __typename: 'Comment' ,id: '1', date: '1.01.2023', comment: 'test comment', email: "mock@gmail.com"}
];

const apolloClientInstance = buildApolloClientInstance();

const Providers = ({ children }: { children: JSX.Element }) => <ApolloProvider client={apolloClientInstance} children={children} />

describe('Comments list', () => {
    it('should render component with logged user', () => {
        render(<Providers><CommentsList comments={COMMENT_MOCK} /></Providers>);
        expect(screen.getByTestId("comments-list")).toBeInTheDocument();
        COMMENT_MOCK.forEach(({ date, comment, email }) => {
            expect(screen.getByText(date)).toBeInTheDocument();
            expect(screen.getByText(comment)).toBeInTheDocument();
            expect(screen.getByText(email)).toBeInTheDocument();
        });
    })
    it('should render component without logged user as visitor', () => {
        render(<Providers><CommentsList comments={[{...COMMENT_MOCK[0], email: undefined}]} /></Providers>);
        expect(screen.getByTestId("comments-list")).toBeInTheDocument();
        COMMENT_MOCK.forEach(({ date, comment, email }) => {
            expect(screen.getByText(date)).toBeInTheDocument();
            expect(screen.getByText(comment)).toBeInTheDocument();
            expect(screen.getByText("Visitor")).toBeInTheDocument();
        });
    });
    it('should render report comment button', () => {
        render(<Providers><CommentsList comments={[{...COMMENT_MOCK[0], email: undefined}]} /></Providers>);
        const buttons = screen.queryAllByRole("button");
        const lastButton = buttons[size(buttons) - 1].innerHTML;
        expect(lastButton).toBe('Report');
    });
})