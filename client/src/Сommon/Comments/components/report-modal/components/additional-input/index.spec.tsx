import { fireEvent, render, screen } from "@testing-library/react";
import AdditionalInput from ".";
import * as Hooks from "../../../../../../Hooks";

jest.mock("../../../../../../Hooks", () => ({
    useBoolean: jest.fn()
}))

describe('Additional input', () => {
    const useBooleanSpy = jest.spyOn(Hooks, "useBoolean");
    const setAdditionalInformation = jest.fn();

    it('should render component without hidden input as default', () => {
        useBooleanSpy.mockReturnValue([false, jest.fn()]);
        render(<AdditionalInput setAdditionalInformation={setAdditionalInformation} />);
        expect(screen.getByText("Want to add an additional information?")).toBeInTheDocument();
        expect(screen.queryByLabelText("Additional information")).not.toBeInTheDocument();
        expect(screen.queryByTestId("additional-report-modal-input")).not.toBeInTheDocument();
    });

    it('should render hidden input', () => {
        useBooleanSpy.mockReturnValue([true, jest.fn()]);
        render(<AdditionalInput setAdditionalInformation={setAdditionalInformation} />);
        const textarea = screen.getByRole("textbox");
        expect(screen.getByText("Want to add an additional information?")).toBeInTheDocument();
        expect(screen.getByLabelText("Additional information")).toBeInTheDocument();
        expect(textarea).toBeInTheDocument();
        fireEvent.change(screen.getByRole("textbox"), { target: { value: 'input text' } })
        expect(setAdditionalInformation).toHaveBeenCalledTimes(1);
        expect(setAdditionalInformation).toHaveBeenCalledWith('input text');
    });
});