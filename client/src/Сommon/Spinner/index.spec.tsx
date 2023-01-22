import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from '.';

describe('LoadingSpinner', () => {
    it('should be in the document', () => {
        render(<LoadingSpinner size='large' />)
        expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    })
})