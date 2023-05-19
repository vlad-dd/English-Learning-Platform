import { fireEvent, render, screen } from '@testing-library/react';
import ModalActions from '.';

const DATA_TEST_IDS = [
    "dialog-actions",
    "dialog-actions-cancel-button",
    "dialog-actions-loading-button"
]

describe('Dialog Modal Actions', () => {
    const props = {
        selectedReason: 'reason-1',
        additionalInformation: 'additional-information-1',
        createReportAppeal: jest.fn(),
        isLoading: false,
        handleClose: jest.fn()
    };

    it('should render all component parts', () => {
        render(<ModalActions {...props} />);
        DATA_TEST_IDS.forEach((id: string) => expect(screen.getByTestId(id)).toBeInTheDocument());
    });

    it('should call all methods is loading button was pressed', () => {
        render(<ModalActions {...props} />);
        fireEvent.click(screen.getByTestId("dialog-actions-loading-button"));
        expect(props.createReportAppeal).toHaveBeenCalledTimes(1);
        expect(props.createReportAppeal).toHaveBeenCalledWith("reason-1", "additional-information-1");
        expect(props.handleClose).toHaveBeenCalledTimes(1);
    });

    it('should show backdrop if isLoading is true', () => {
        render(<ModalActions {...{ props, isLoading: true }} />);
        expect(screen.getByTestId("dialog-actions-backdrop-wrapper")).toBeInTheDocument()
    });
});