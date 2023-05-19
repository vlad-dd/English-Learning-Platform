import { render, screen } from '@testing-library/react';
import SelectReportReason from '.';

const DATA_TEST_IDS = [
    "select-reason-box",
    "reason-selector"
];

describe('Select Report Reason', () => {
    const props = {
        selectedReason: 'reason-1',
        setSelectedReason: jest.fn()
    }
    it('should render component', () => {
        render(<SelectReportReason {...props} />);
        DATA_TEST_IDS.forEach((id: string) => expect(screen.getByTestId(id)).toBeInTheDocument());
    })
})