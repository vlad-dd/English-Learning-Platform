import { render, screen } from '@testing-library/react';
import SelectReportReason from '.';
import { withIntlProvider } from '../../../../test-utils/hocs';

const DATA_TEST_IDS = [
    "select-reason-box",
    "reason-selector"
];

const SelectReportReasonWithProvider = withIntlProvider(SelectReportReason);

describe('Select Report Reason', () => {
    const props = {
        selectedReason: 'reason-1',
        setSelectedReason: jest.fn()
    }
    it('should render component', () => {
        render(<SelectReportReasonWithProvider {...props} />);
        DATA_TEST_IDS.forEach((id: string) => expect(screen.getByTestId(id)).toBeInTheDocument());
    });
});