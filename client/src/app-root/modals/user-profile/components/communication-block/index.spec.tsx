import { fireEvent, render, screen } from '@testing-library/react';
import { withApolloProvider, withIntlProvider } from '../../../../../test-utils/hocs';
import * as CommunicationBlockWidget from '../../use-communication-widget';
import CommunicationBlock from '.';
import {
    COMMUNICATION_BLOCK_DATA_TEST_ID,
    REPORT_USER_BUTTON_DATA_TEST_ID
} from '../../constants';

jest.mock("../../use-communication-widget");

const REPORT_DIALOG_TEXT = [
    "Report Inappropriate User👮‍♀️",
    "Our user complaint feature allows you to report any behavior or content that you believe violates our English Learning Platform policies. We take all complaints seriously and strive to ensure that our platform is a safe and welcoming space for all users."
];

const COMMUNICATION_BLOCK_TEST_IDS = [
    "user-details-block",
    "send-message-button",
    "report-user-button"
];

describe('Communication Block', () => {
    const props = {
        isOpen: true,
        handleOpening: jest.fn(),
        createReportAppeal: jest.fn(),
        isLoading: false,
        error: undefined
    };
    const CommunicationBlockWithProvider = withApolloProvider(withIntlProvider(CommunicationBlock));
    const widgetSpy = jest.spyOn(CommunicationBlockWidget, "useCommunicationBlockWidget");
    it('should render component with opened report dialog', () => {
        widgetSpy.mockReturnValue(props);
        render(<CommunicationBlockWithProvider />);
        expect(screen.getByTestId(COMMUNICATION_BLOCK_DATA_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId("report-modal-dialog")).toBeInTheDocument();
        REPORT_DIALOG_TEXT.forEach((text: string) => expect(screen.getByText(text)).toBeInTheDocument());
    });

    it('should render component without report dialog', () => {
        widgetSpy.mockReturnValue({ ...props, isOpen: false });
        render(<CommunicationBlockWithProvider />);
        COMMUNICATION_BLOCK_TEST_IDS.forEach((id: string) => expect(screen.getByTestId(id)).toBeInTheDocument());
    });

    it('should call handleOpening if user pressed report button ', () => {
        widgetSpy.mockReturnValue({ ...props, isOpen: false });
        render(<CommunicationBlockWithProvider />);
        fireEvent.click(screen.getByTestId(REPORT_USER_BUTTON_DATA_TEST_ID));
        expect(props.handleOpening).toBeCalledTimes(1);
    });


})