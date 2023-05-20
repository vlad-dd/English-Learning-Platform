import { render, screen } from '@testing-library/react';
import AdminPage from './presentational';

jest.mock("./components", () => ({
    AdminPanelHeader: () => <div data-testid="admin-panel-header" />,
    PieChartSection: () => <div data-testid="pie-chart-section" />,
    LineChartSection: () => <div data-testid="line-chart-section" />,
}));

const DATA_TEST_IDS = [
    "admin-panel-header",
    "pie-chart-section",
    "line-chart-section"
];

describe('Admin Panel', () => {
    it('should render component', () => {
        render(<AdminPage />);
        DATA_TEST_IDS.forEach((id: string) => expect(screen.getByTestId(id)).toBeInTheDocument());
    });
});