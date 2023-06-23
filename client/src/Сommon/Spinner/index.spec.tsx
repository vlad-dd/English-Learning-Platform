import { render, screen } from '@testing-library/react';
import LoadingSpinner from '.';
import { LOADING_SPINNER_DATA_TEST_ID } from './constants';

describe('LoadingSpinner', () => {
    it('should be in the document', () => {
        render(<LoadingSpinner size='large' />);
        expect(screen.getByTestId(LOADING_SPINNER_DATA_TEST_ID)).toBeInTheDocument();
    });
});