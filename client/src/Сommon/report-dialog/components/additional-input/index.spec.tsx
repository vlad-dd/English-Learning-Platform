import { fireEvent, render, screen } from '@testing-library/react'
import * as Hooks from '../../../../Hooks';
import { withIntlProvider } from '../../../../test-utils/hocs';
import AdditionalInput from '.';
import { ADDITIONAL_REPORT_MODAL_INPUT_DATA_TEST_ID } from '../../constants';

jest.mock("../../../../Hooks");

const AdditionalInputWithProvider = withIntlProvider(AdditionalInput);

describe('AdditionalInput', () => {
    const label = "Want to add an additional information?";
    const useBooleanSpy = jest.spyOn(Hooks, 'useBoolean');
    const handleChange = jest.fn();
    it('should not render the additional input', () => {
        useBooleanSpy.mockReturnValue([false, jest.fn()]);
        render(<AdditionalInputWithProvider setAdditionalInformation={handleChange} />)
        expect(screen.getByText(label)).toBeInTheDocument();
        expect(screen.queryByTestId(ADDITIONAL_REPORT_MODAL_INPUT_DATA_TEST_ID)).not.toBeInTheDocument();
    });

    it('should render an additional input if useBoolean returns true flag', () => {
        useBooleanSpy.mockReturnValue([true, jest.fn()]);
        render(<AdditionalInputWithProvider setAdditionalInformation={handleChange} />)
        expect(screen.getByText(label)).toBeInTheDocument();
        expect(screen.queryByTestId(ADDITIONAL_REPORT_MODAL_INPUT_DATA_TEST_ID)).toBeInTheDocument();
    });

    it('should call handleChange if user makes change', () => {
        useBooleanSpy.mockReturnValue([true, jest.fn()]);
        render(<AdditionalInputWithProvider setAdditionalInformation={handleChange} />);
        fireEvent.change(screen.getByTestId(ADDITIONAL_REPORT_MODAL_INPUT_DATA_TEST_ID), { target: { value: 'user-input' } })
        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(handleChange).toHaveBeenCalledWith("user-input");
    });
})