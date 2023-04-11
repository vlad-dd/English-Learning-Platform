import { render, screen } from "@testing-library/react";
import CommentsHeader from ".";
import { size } from "lodash";

const COMMENT_NODES_IDS = [
    'comments-header',
    'comments-count',
    'comments-rule-section'
];

const COMMENT_MOCK = [
    { __typename: 'Comment' ,id: '1', date: '1.01.2023', comment: 'test comment'}
];

describe('Comments Header', () => {
    it('should render comments header nodes', () => {
        render(<CommentsHeader comments={COMMENT_MOCK}/>);
        COMMENT_NODES_IDS.forEach((nodeID: string) => expect(screen.getByTestId(nodeID)).toBeInTheDocument());
        expect(screen.getByText(`${size(COMMENT_MOCK)} Comment`)).toBeInTheDocument();
    });
});