import React from 'react';
import { render, screen } from '@testing-library/react';
import ExamplePanels from './presentational';

describe('ExamplePanels', () => { 
    const props = [{
        header: 'MockHeader',
        icon: 'mock.png',
        sentences: [{
          id: 1,
          sentence: 'MockSentence',
    }]
}];
    it('should render ExamplePanels', () => { 
        render(<ExamplePanels examples={props} />)
        expect(screen.getByText('MockHeader')).toBeInTheDocument();
     });
});