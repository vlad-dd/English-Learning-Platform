import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { withIntlProvider } from "../../../../../test-utils/hocs";
import CommentRulesModal from '.';
import { 
    COMMENT_RULES_WRAPPER_DATA_TEST_ID, 
    COMMENT_RULE_TOOLTIP_TITLE, 
    DIALOG_TITLE_DATA_TEST_ID, 
    RULES_ICON_DATA_TEST_ID,
    POLICY_RULES, 
} from "../../../constants";

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

    const CommentRulesModalWithProvider = withIntlProvider(CommentRulesModal);

    it('should not show content if it is closed', () => {
        render(<CommentRulesModalWithProvider open={false} setOpen={setOpen} />);
        expect(screen.getByTestId(COMMENT_RULES_WRAPPER_DATA_TEST_ID)).toBeInTheDocument();
        expect(screen.queryByTestId(DIALOG_TITLE_DATA_TEST_ID)).not.toBeInTheDocument();
    });

    it('should show the tooltip text', async () => {
        render(<CommentRulesModalWithProvider open={false} setOpen={setOpen} />);
        const icon = screen.getByTestId(RULES_ICON_DATA_TEST_ID);
        fireEvent.mouseOver(icon);
        await waitFor(() =>  expect(screen.getByText(COMMENT_RULE_TOOLTIP_TITLE)).toBeInTheDocument());
    });

    it('should show content if it is opened', () => {
        render(<CommentRulesModalWithProvider open={true} setOpen={setOpen} />);
        DIALOG_NODES_ID.map((nodeId: string) => expect(screen.getByTestId(nodeId)).toBeInTheDocument());
    });

    it('should render rules', () => {
        render(<CommentRulesModalWithProvider open={true} setOpen={setOpen} />);
        POLICY_RULES.map((rule: string) => expect(screen.getByText(rule)).toBeInTheDocument());
    });

    it('should call setOpen function', () => {
        render(<CommentRulesModalWithProvider open={false} setOpen={setOpen} />);
        fireEvent.click(screen.getByTestId(RULES_ICON_DATA_TEST_ID));
        expect(setOpen).toHaveBeenCalledTimes(1);
    });
});