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
        const loadingButton = screen.getByTestId("loading-button");
        expect(screen.getByTestId("dialog-actions")).toBeInTheDocument();
        expect(loadingButton).toBeInTheDocument();
        expect(loadingButton).toBeEnabled();
    });

    it('should render component correctly', async () => {
        fireEvent.click(screen.getByTestId("loading-button"));
        const backdrop = await waitFor(() => screen.getByTestId('backdrop-wrapper'));
        expect(backdrop).toBeInTheDocument();
    });
});