import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import SelectReportReason from ".";


describe('Modal Select', () => {
    let selectedReason = 'Dictionary';
    const setSelectedReason = jest.fn();
    it('should render component correctly', async () => {
        render(<SelectReportReason selectedReason={selectedReason} setSelectedReason={setSelectedReason} />);
        const select: any = screen.getByTestId("reason-selector").childNodes[1];
        expect(select).toBeInTheDocument();
        expect(select.value).toBe('Dictionary');

        fireEvent.mouseDown(select, { target: { value: 'Mocked' } });
        expect(select.value).toBe('Mocked')
    });
})