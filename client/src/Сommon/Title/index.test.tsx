import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from '.';

describe('Image', () => {

    it('should render Title component with innerHTML text', () => {
        render(<Title>Example text</Title>)
        expect(screen.getByText('Example text')).toBeInTheDocument();
    })

    it('should render title with passed style attributes', () => {
        render(<Title styles={{ color: "black" }}>Another Title Text</Title>)
        expect(screen.getByText('Another Title Text')).toBeInTheDocument();
        expect(screen.getByTestId('title-component-id').getAttribute('style')).toBe('color: black;');
    })
})