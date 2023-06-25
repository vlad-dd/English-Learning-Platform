import { fireEvent, render, screen } from '@testing-library/react';
import SubmitDownloadDialog from '.';
import { withIntlProvider } from '../../../../test-utils/hocs';

const DIALOG_TEXT = [
    "Do you really want to download reports for this application?",
    "This file provides a comprehensive analysis of the issues encountered in current application during a specific time period. The document presents a detailed overview of the issues, their frequency, and their impact on the application's performance and user experience."
];

const SubmitDownloadDialogWithProvider = withIntlProvider(SubmitDownloadDialog);

describe('Submit Download Button', () => {
    const props = {
        isOpen: true,
        setIsOpen: jest.fn()
    };

    beforeEach(() => {
        render(<SubmitDownloadDialogWithProvider {...props} />);
    });
    
    it('should render component', () => {
        DIALOG_TEXT.forEach((text: string) => expect(screen.getByText(text)).toBeInTheDocument());
    });

    it('should close dialog if user pressed the button', () => {
        fireEvent.click(screen.getByRole("button"));
        expect(props.setIsOpen).toHaveBeenCalledTimes(1);
        expect(props.setIsOpen).toHaveBeenCalledWith(false);
    });
});