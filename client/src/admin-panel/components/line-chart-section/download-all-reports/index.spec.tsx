import { render, screen } from '@testing-library/react';
import { withIntlProvider } from '../../../../test-utils/hocs';
import DownloadAllReportsButton from '.';
import { DOWNLOAD_ALL_REPORTS_BUTTON_ID } from '../../../constants';

const DownloadAllReportsButtonWithProvider = withIntlProvider(DownloadAllReportsButton);

describe('Download All Reports Button', () => {
    it('should render button', () => {
        render(<DownloadAllReportsButtonWithProvider />);
        expect(screen.getByTestId(DOWNLOAD_ALL_REPORTS_BUTTON_ID)).toBeInTheDocument();
        expect(screen.getByText("Get All Applications Reports")).toBeInTheDocument();
    });
});