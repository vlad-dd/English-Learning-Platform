import { render, screen } from '@testing-library/react';
import LineChartSection from './presentational';
import { DOWNLOAD_ALL_REPORTS_BUTTON_ID, LINE_CHART_SECTION } from '../../constants';

jest.mock("react-chartjs-2", () => ({
    Line: () => <div data-testid="line-chart" />
}));

jest.mock("./submit-download-dialog", () => () => <div data-testid="submit-download-dialog" />);

jest.mock("./download-all-reports", () => () => <div data-testid="download-all-reports-button" />);

const DATA_TEST_IDS = [
    "line-chart",
    "submit-download-dialog",
    "download-all-reports-button"
];

describe('Line Chart Section', () => {
    it('should render component', () => {
        render(<LineChartSection />);
        expect(screen.getByTestId(LINE_CHART_SECTION)).toBeInTheDocument();
        expect(screen.getByText("Line Chart Of Reports By Application")).toBeInTheDocument();
        DATA_TEST_IDS.forEach((id: string) => expect(screen.getByTestId(id)).toBeInTheDocument());
    });
});