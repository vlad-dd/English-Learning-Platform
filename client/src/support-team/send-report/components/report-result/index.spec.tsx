import { render, screen } from "@testing-library/react";
import ReportResult from './index';
import { withIntlProvider } from "../../../../test-utils/hocs";

const ReportResultWithProvider =  withIntlProvider(ReportResult);

describe('Submitted Result', () => {
    it('should render component correctly', () => {
        render(<ReportResultWithProvider />);
        expect(screen.getByText("Your Report Was Successfully Sent!")).toBeInTheDocument();
    });
});