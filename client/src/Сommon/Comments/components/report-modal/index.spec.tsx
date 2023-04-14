import { fireEvent, render, screen } from "@testing-library/react";
import ReportCommentModal from ".";

const NODE_ENTITIES_CONTENT = [
    'Report Inappropriate Comment👮‍♀️',
    'Our easy-to-use comment reporting feature allows you to quickly and easily report any comments that do not match our English Learning Platform policy. We want to ensure that our platform is a safe and respectful space for all users, and we rely on your help to achieve this goal.'
]

describe('ReportCommentModal', () => {
    const commentID = 'testID';
    const setOpen = jest.fn();

    it('should render closed component correctly', () => {
        render(<ReportCommentModal commentID={commentID} isOpen={false} setOpen={setOpen} />)
        expect(screen.queryByTestId("report-modal-dialog")).not.toBeInTheDocument();
    });

    it('should render opened component correctly', () => {
        render(<ReportCommentModal commentID={commentID} isOpen setOpen={setOpen} />)
        expect(screen.queryByTestId("report-modal-dialog")).toBeInTheDocument();
        NODE_ENTITIES_CONTENT.forEach((content: string) => expect(screen.getByText(content)).toBeInTheDocument());
    });

    it('should close the modal', () => {
        render(<ReportCommentModal commentID={commentID} isOpen setOpen={setOpen} />)
        const cancelButton = screen.getByText("Cancel");
        fireEvent.click(cancelButton);
        expect(setOpen).toHaveBeenCalledTimes(1);
    })
})