import { fireEvent, render, screen } from '@testing-library/react';
import SubmitDownloadDialog from '.';

const DIALOG_TEXT = [
    "Do you really want to download reports for [Application Name]?",
    "This file provides a comprehensive analysis of the issues encountered in the [Application Name] during a specific time period. The document presents a detailed overview of the issues, their frequency, and their impact on the application's performance and user experience."
];

describe('Submit Download Button', () => {
    const props = {
        isOpen: true,
        setIsOpen: jest.fn()
    };
    
    it('should render component', () => {
        render(<SubmitDownloadDialog {...props} />);
        DIALOG_TEXT.forEach((text: string) => expect(screen.getByText(text)).toBeInTheDocument());
    });

    it('should close dialog if user pressed the button', () => {
        render(<SubmitDownloadDialog {...props} />);
        fireEvent.click(screen.getByRole("button"));
        expect(props.setIsOpen).toHaveBeenCalledTimes(1);
        expect(props.setIsOpen).toHaveBeenCalledWith(false);
    });
});