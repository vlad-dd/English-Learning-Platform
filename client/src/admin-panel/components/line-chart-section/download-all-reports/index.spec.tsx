import { render, screen } from '@testing-library/react';
import DownloadAllReportsButton from '.';
import { DOWNLOAD_ALL_REPORTS_BUTTON_ID } from '../../../constants';

describe('Download All Reports Button', () => {
    it('should render button', () => {
        render(<DownloadAllReportsButton />);
        expect(screen.getByTestId(DOWNLOAD_ALL_REPORTS_BUTTON_ID)).toBeInTheDocument();
        expect(screen.getByText("Get All Applications Reports")).toBeInTheDocument();
    });
});