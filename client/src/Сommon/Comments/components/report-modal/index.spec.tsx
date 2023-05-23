import { fireEvent, render, screen } from "@testing-library/react";
import { withApolloProvider } from "../../../../test-utils/hocs";
import ReportCommentModal from ".";

const NODE_ENTITIES_CONTENT = [
    'Report Inappropriate Comment👮‍♀️',
    'Our easy-to-use comment reporting feature allows you to quickly and easily report any comments that do not match our English Learning Platform policy. We want to ensure that our platform is a safe and respectful space for all users, and we rely on your help to achieve this goal.'
];

const ReportCommentModalWithProvider = withApolloProvider(ReportCommentModal);

describe('ReportCommentModal', () => {
    const commentID = 'testID';
    const setOpen = jest.fn();

    it('should render closed component correctly', () => {
        expect(screen.queryByTestId("report-modal-dialog")).not.toBeInTheDocument();
    });

    describe('should work with opened modal correctly', () => {
        beforeEach(() => {
            render(<ReportCommentModalWithProvider commentID={commentID} isOpen setOpen={setOpen} />)
        });

        it('should render opened component correctly', () => {
            expect(screen.queryByTestId("report-modal-dialog")).toBeInTheDocument();
            NODE_ENTITIES_CONTENT.forEach((content: string) => expect(screen.getByText(content)).toBeInTheDocument());
        });

        it('should close the modal', () => {
            const cancelButton = screen.getByText("Cancel");
            fireEvent.click(cancelButton);
            expect(setOpen).toHaveBeenCalledTimes(1);
        });
    })
})