import { render, screen } from '@testing-library/react';
import ReportDialog from '.';
import { ApolloError } from '@apollo/client';
import { REPORT_DIALOG_ERROR_MESSAGE } from './constants';

export const DATA_TEST_IDS = [
    "report-modal-dialog",
    "report-dialog-content",
    "report-dialog-select-report-reason",
    "report-dialog-additional-input",
    "report-dialog-actions"
];

jest.mock("./components/select-report-reason", () => () => <div data-testid="report-dialog-select-report-reason" />);
jest.mock("./components/additional-input", () => () => <div data-testid="report-dialog-additional-input" />);
jest.mock("./components/dialog-actions", () => () => <div data-testid="report-dialog-actions" />);

describe('Report Dialog', () => {
    const props = {
        isOpen: true,
        title: 'mock-title',
        description: 'mock-description',
        handleClose: jest.fn(),
        createReportAppeal: jest.fn(),
        isLoading: false,
        error: undefined
    }

    it('should render component with content' , () => {
        render(<ReportDialog {...props} />);
        DATA_TEST_IDS.forEach((id: string) => expect(screen.getByTestId(id)).toBeInTheDocument());
        expect(screen.getByText(props.title)).toBeInTheDocument();
        expect(screen.getByText(props.description)).toBeInTheDocument();
    });

    it('should render component with content' , () => {
        render(<ReportDialog {...{...props, error: new ApolloError({})}} />);
        expect(screen.getByText(REPORT_DIALOG_ERROR_MESSAGE)).toBeInTheDocument();
    });  
});