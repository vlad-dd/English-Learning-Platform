import { fireEvent, render, screen } from '@testing-library/react'
import * as Hooks from '../../../../Hooks';
import AdditionalInput from '.';

jest.mock("../../../../Hooks");

describe('AdditionalInput', () => {
    const label = "Want to add an additional information?";
    const useBooleanSpy = jest.spyOn(Hooks, 'useBoolean');
    const handleChange = jest.fn();
    it('should not render the additional input', () => {
        useBooleanSpy.mockReturnValue([false, jest.fn()]);
        render(<AdditionalInput setAdditionalInformation={handleChange} />)
        expect(screen.getByText(label)).toBeInTheDocument();
        expect(screen.queryByTestId("additional-report-modal-input")).not.toBeInTheDocument();
    });

    it('should render an additional input if useBoolean returns true flag', () => {
        useBooleanSpy.mockReturnValue([true, jest.fn()]);
        render(<AdditionalInput setAdditionalInformation={handleChange} />)
        expect(screen.getByText(label)).toBeInTheDocument();
        expect(screen.queryByTestId("additional-report-modal-input")).toBeInTheDocument();
    });

    it('should call handleChange if user makes change', () => {
        useBooleanSpy.mockReturnValue([true, jest.fn()]);
        render(<AdditionalInput setAdditionalInformation={handleChange} />)
        fireEvent.change(screen.getByTestId("additional-report-modal-input"), { target: { value: 'user-input' } })
        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(handleChange).toHaveBeenCalledWith("user-input");
    });
})