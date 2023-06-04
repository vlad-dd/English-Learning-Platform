import { render, screen } from '@testing-library/react'
import TenseExamplePanels from './example-panels';
import { withIntlProvider } from '../../test-utils/hocs';

const TenseExamplePanelsWithProvider = withIntlProvider(TenseExamplePanels);

describe('TenseExamplePanels', () => {
    const props = [{
        __typename: 'typename',
        key: 1,
        header: 'MockHeader',
        icon: 'mock.png',
        sentences: [{
            __typename: 'sentence typename',
          id: 1,
          sentence: 'MockSentence',
    }]
}];
    it('should render TenseExamplePanels', () => {
        render(<TenseExamplePanelsWithProvider examples={props} />);
        expect(screen.getByTestId('title-component-id')).toBeInTheDocument();
        expect(screen.getByText('Examples')).toBeInTheDocument();
        expect(screen.getByText('MockHeader')).toBeInTheDocument();
    });
});