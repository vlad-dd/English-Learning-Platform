import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderLeftSide from '.';

describe('HeaderLeftSide', () => {
    it('should render HeaderLeftSide', () => {
        render(<HeaderLeftSide />)
        expect(screen.getByTestId('header-left-side')).toBeInTheDocument();
        expect(screen.getByRole('img')).toBeInTheDocument();
        expect(screen.getByTestId('header-input').getAttribute('placeholder')).toBe('Search for...')
    })
})