import React from 'react';
import { render, screen } from '@testing-library/react'
import DefaultPage from './presentational';

it('should render Default Page', () => {
    render(<DefaultPage />)
    expect(screen.getByText('Default Page')).toBeInTheDocument();
})