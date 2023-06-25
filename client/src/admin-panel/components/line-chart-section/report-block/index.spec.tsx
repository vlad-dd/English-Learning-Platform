import { fireEvent, render, screen } from '@testing-library/react';
import { withIntlProvider } from '../../../../test-utils/hocs';
import ApplicationReportBlock from '.';
import { APPLICATION_REPORT_BLOCK_ID } from '../../../constants';

const ApplicationReportBlockWithProvider = withIntlProvider(ApplicationReportBlock);

describe('Report Block', () => {
    const props = {
        application: 'Dictionary',
        date: 'dd-mm-yy',
        setIsOpen: jest.fn()
    };

    beforeEach(() => {
        render(<ApplicationReportBlockWithProvider {...props} />);
    });
    it('should render component', () => {
        expect(screen.getByTestId(APPLICATION_REPORT_BLOCK_ID)).toBeInTheDocument();
        expect(screen.getByText(props.application)).toBeInTheDocument();
        expect(screen.getByText(props.date)).toBeInTheDocument();
    });

    it('should call setIsOpen if user has clicked the button', () => {
        fireEvent.click(screen.getByRole("button"));
        expect(props.setIsOpen).toHaveBeenCalledTimes(1);
        expect(props.setIsOpen).toHaveBeenCalledWith(true);
    });
});