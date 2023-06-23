import { render, screen } from "@testing-library/react";
import { withIntlProvider } from "../../../../test-utils/hocs";
import SendCommentEditor from '.';
import { ADD_COMMENT_BUTTON_DATA_TEST_ID } from "../../constants";

jest.mock("../../../../utils/utils", () => ({
    ...jest.requireActual("../../../../utils/utils"),
    generateNicknameAvatars: () => ({ children: 'M S' })
}));

const SEND_COMMENT_TEXT_CONTENT = [
    "M S",
    "Send"
];

const SEND_COMMENT_IDS= [
    "rich-text-editor",
    "add-comment-button"
];

const SendCommentEditorWithProvider = withIntlProvider(SendCommentEditor);

describe('SendCommentEditor', () => {
    const addComment = jest.fn();
    it('should render component correctly', () => {
        render(<SendCommentEditorWithProvider addComment={addComment} isLoading={false} />);
        SEND_COMMENT_TEXT_CONTENT.forEach((content: string) => expect(screen.getByText(content)).toBeInTheDocument());
        SEND_COMMENT_IDS.forEach((content: string) => expect(screen.getByTestId(content)).toBeInTheDocument());
        expect(screen.getByTestId(ADD_COMMENT_BUTTON_DATA_TEST_ID)).toBeDisabled();     
        expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
    });

    it('should not if loading', () => {
        render(<SendCommentEditorWithProvider addComment={addComment} isLoading />);
        expect(screen.getByRole("progressbar")).toBeInTheDocument();
    })
})