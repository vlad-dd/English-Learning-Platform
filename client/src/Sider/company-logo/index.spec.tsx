import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react'
import CompanyLogo from '.';

describe('Company Logo', () => {

    it('should render company logo with default theme', () => {
        render(<BrowserRouter><CompanyLogo defaultTheme /></BrowserRouter>)
        expect(screen.getByRole('img')).toBeInTheDocument();
        expect(screen.getByRole('img').getAttribute('src')).toBe('black.svg');
        expect(screen.getByRole('link').getAttribute('href')).toBe('/');
    });

    it('should render company logo with changed theme color', () => {
        render(<BrowserRouter><CompanyLogo defaultTheme={false} /></BrowserRouter>)
        expect(screen.getByRole('img')).toBeInTheDocument();
        expect(screen.getByRole('img').getAttribute('src')).toBe('white.svg');
        expect(screen.getByRole('link').getAttribute('href')).toBe('/');
    });

});