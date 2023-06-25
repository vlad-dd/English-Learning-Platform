import { render, screen } from '@testing-library/react';
import AdminPanelHeader from '.';
import { withIntlProvider } from '../../../test-utils/hocs';

const DATA_TEST_IDS = [
    "admin-panel-header",
    "download-button"
];

const AdminPanelHeaderWithProvider = withIntlProvider(AdminPanelHeader);

describe('Admin Panel Header', () => {
    it('should render component', () => {
        render(<AdminPanelHeaderWithProvider />);
        DATA_TEST_IDS.forEach((id: string) => expect(screen.getByTestId(id)).toBeInTheDocument());
        expect(screen.getByText("Admin Control Dashboard")).toBeInTheDocument();
        expect(screen.getByText("Download Report")).toBeInTheDocument();
    });
});