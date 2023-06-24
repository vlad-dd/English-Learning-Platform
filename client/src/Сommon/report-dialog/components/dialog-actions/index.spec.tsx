import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { withIntlProvider } from '../../../../test-utils/hocs';
import { IDialogActions } from '../../types';
import ModalActions from '.';
import {
    DIALOG_ACTIONS_BACKDROP_WRAPPER_DATA_TEST_ID,
    DIALOG_ACTIONS_LOADING_BUTTON_DATA_TEST_ID
} from '../../constants';

const DATA_TEST_IDS = [
    "dialog-actions",
    "dialog-actions-cancel-button",
    "dialog-actions-loading-button"
];

const ModalActionsWithProviders = withIntlProvider(ModalActions);

describe('Dialog Modal Actions', () => {
    const props: IDialogActions = {
        selectedReason: 'reason-1',
        additionalInformation: 'additional-information-1',
        createReportAppeal: jest.fn(),
        error: undefined,
        isLoading: false,
        handleClose: jest.fn()
    };

    it('should render all component parts', () => {
        render(<ModalActionsWithProviders {...props} />);
        DATA_TEST_IDS.forEach((id: string) => expect(screen.getByTestId(id)).toBeInTheDocument());
    });

    it('should call all methods is loading button was pressed', () => {
        render(<ModalActionsWithProviders {...props} />);
        fireEvent.click(screen.getByTestId(DIALOG_ACTIONS_LOADING_BUTTON_DATA_TEST_ID));
        expect(props.createReportAppeal).toHaveBeenCalledTimes(1);
        expect(props.createReportAppeal).toHaveBeenCalledWith("reason-1", "additional-information-1");
        waitFor(() => expect(props.handleClose).toHaveBeenCalledTimes(1));
    });

    it('should show backdrop if isLoading is true', () => {
        render(<ModalActionsWithProviders {...{ ...props, isLoading: true }} />);
        expect(screen.getByTestId(DIALOG_ACTIONS_BACKDROP_WRAPPER_DATA_TEST_ID)).toBeInTheDocument()
    });
});