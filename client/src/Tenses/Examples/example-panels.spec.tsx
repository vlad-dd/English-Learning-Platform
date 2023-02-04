import React from 'react';
import { render, screen } from '@testing-library/react'
import TenseExamplePanels from './example-panels';

describe('TenseExamplePanels', () => {
    const props = [{
        header: 'MockHeader',
        icon: 'mock.png',
        sentences: [{
          id: 1,
          sentence: 'MockSentence',
    }]
}];
    it('should render TenseExamplePanels', () => {
        render(<TenseExamplePanels examples={props} />);
        expect(screen.getByTestId('title-component-id')).toBeInTheDocument();
        expect(screen.getByText('Examples')).toBeInTheDocument();
        expect(screen.getByText('MockHeader')).toBeInTheDocument();
    });
});