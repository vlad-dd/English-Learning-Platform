import { render, screen } from '@testing-library/react';
import ExamplePanels from './presentational';

describe('ExamplePanels', () => { 
    const props = [{
        __typename: 'typename',
        key: 1,
        header: 'MockHeader',
        icon: 'mock.png',
        sentences: [{
          __typename: 'sentences typename',
          id: 1,
          sentence: 'MockSentence',
    }]
}];
    it('should render ExamplePanels', () => { 
        render(<ExamplePanels examples={props} />)
        expect(screen.getByText('MockHeader')).toBeInTheDocument();
     });
});