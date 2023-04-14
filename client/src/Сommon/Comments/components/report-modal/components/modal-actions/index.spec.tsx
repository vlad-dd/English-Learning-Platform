import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ModalActions from '.';

describe('ModalActions', () => {
    const selectedReason = 'Dictionary';
    const createUserAppeal = jest.fn();
    const handleClose = jest.fn();

    beforeEach(() => {
        render(
            <ModalActions
                selectedReason={selectedReason}
                createUserAppeal={createUserAppeal}
                handleClose={handleClose}
            />
        );
    });

    it('should render component correctly', () => {
        expect(screen.getByTestId("dialog-actions")).toBeInTheDocument();
        expect(screen.getByTestId("loading-button")).toBeInTheDocument();
    });

    //Add tests for createUserAppeal once bff for report modal arrives.
})