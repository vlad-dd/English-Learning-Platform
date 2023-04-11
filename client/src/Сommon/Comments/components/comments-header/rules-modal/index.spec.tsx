import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CommentRulesModal from '.';
import { POLICY_RULES } from "../../../constants";

const DIALOG_NODES_ID = [
    'dialog-rules',
    'dialog-title',
    'dialog-content',
    'dialog-list',
    'dialog-description',
    'dialog-submit-button'
];

describe('CommentRulesModal', () => {
    const setOpen =jest.fn();

    it('should not show content if it is closed', () => {
        render(<CommentRulesModal open={false} setOpen={setOpen} />);
        expect(screen.getByTestId("comment-rules-wrapper")).toBeInTheDocument();
        expect(screen.queryByTestId("dialog-title")).not.toBeInTheDocument();
    });

    it('should show the tooltip text', async () => {
        render(<CommentRulesModal open={false} setOpen={setOpen} />);
        const icon = screen.getByTestId("rules-icon");
        fireEvent.mouseOver(icon);
        await waitFor(() =>  expect(screen.getByText("Rules")).toBeInTheDocument());
    });

    it('should show content if it is opened', () => {
        render(<CommentRulesModal open={true} setOpen={setOpen} />);
        DIALOG_NODES_ID.map((nodeId: string) => expect(screen.getByTestId(nodeId)).toBeInTheDocument());
    });

    it('should render rules', () => {
        render(<CommentRulesModal open={true} setOpen={setOpen} />);
        POLICY_RULES.map((rule: string) => expect(screen.getByText(rule)).toBeInTheDocument());
    });

    it('should call setOpen function', () => {
        render(<CommentRulesModal open={false} setOpen={setOpen} />);
        fireEvent.click(screen.getByTestId("rules-icon"));
        expect(setOpen).toHaveBeenCalledTimes(1);
    });
});