import { render, screen } from "@testing-library/react";
import ReportResult from './index';

describe('Submitted Result', () => {
    it('should render component correctly', () => {
        render(<ReportResult />);
        expect(screen.getByText("Your Report Was Successfully Sent!")).toBeInTheDocument();
    });
});