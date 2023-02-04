import React from 'react';
import { render, screen } from '@testing-library/react'
import Releases from './presentationa'

describe('Releases', () => {
    it('should render Release component', () => {
        render(<Releases />);
        expect(screen.getByTestId('release-wrapper')).toBeInTheDocument();
        expect(screen.getByText('Releases hooray!')).toBeInTheDocument();
    });
})