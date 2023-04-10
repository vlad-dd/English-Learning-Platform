import React from "react";
import { Provider } from "react-redux";
import { fireEvent, render, screen } from '@testing-library/react';
import store from "../../store";
import SendReportModal from ".";
import { ELP_APPLICATIONS } from "../constants";

const SEND_REPORT_FORM_CONTENT = [
    "Report about the Problem👷‍♂️",
    "Was found in",
    "Description",
    "Send",
    "Cancel",
    "OK"
];

const SEND_REPORT_FORM_ENTITIES = [
    "report-service-modal",
    "send-report-form",
    "send-report-select-reason",
    "send-report-textarea",
    "send-report-min-length-gate",
    "send-report-max-length-gate",
    "send-report-submit",
];

const SendReportModalProviders = ({ children }: { children: JSX.Element }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

describe("SendReportModal", () => {
    const openSendReportModal = () => fireEvent.click(screen.getByTestId("report-service-icon"));
    beforeEach(() => {
        render(<SendReportModalProviders><SendReportModal /></SendReportModalProviders>);
    });

    it('should render the modal icon', () => {
        expect(screen.getByTestId("report-service-icon")).toBeInTheDocument();
    });

    it('should render modal after clicking on the modal icon', () => {
        expect(screen.getByTestId("report-service-icon")).toBeInTheDocument();
        openSendReportModal();
        SEND_REPORT_FORM_CONTENT.forEach((element: string) => expect(screen.getByText(element)).toBeInTheDocument());
        SEND_REPORT_FORM_ENTITIES.forEach((element: string) => expect(screen.getByTestId(element)).toBeInTheDocument());
    });

    it('should disable submit button when form is empty', () => {
        expect(screen.getByTestId('send-report-submit')).toBeDisabled();
    });

    it('should show length error when description is too short', () => {
        const textarea = screen.getByTestId('send-report-textarea');
        fireEvent.change(textarea, { target: { value: 'too short' } });
        fireEvent.blur(textarea);
        const error = screen.getByText('You should write at least 10 symbols!');
        expect(error).toBeInTheDocument();
    });

    it('should show length error when description is too long', () => {
        const textarea = screen.getByTestId('send-report-textarea');
        fireEvent.change(textarea, { target: { value: 'q'.repeat(250) } });
        const error = screen.getByText('You have reached max of symbols!');
        expect(error).toBeInTheDocument();
    });

    it('should render application dropdown after clicking on select input', () => {
        const select = screen.getByRole("combobox");
        fireEvent.mouseDown(select);
        ELP_APPLICATIONS.forEach(({ label }) => expect(screen.getByText(label)).toBeInTheDocument());
    });
});