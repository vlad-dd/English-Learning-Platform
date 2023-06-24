import { render, screen } from '@testing-library/react';
import Title from '.';
import { TITLE_COMPONENT_DATA_TEST_ID } from './constants';

describe('Image', () => {

    it('should render Title component with innerHTML text', () => {
        render(<Title>Example text</Title>)
        expect(screen.getByText('Example text')).toBeInTheDocument();
    })

    it('should render title with passed style attributes', () => {
        render(<Title styles={{ color: "black" }}>Another Title Text</Title>)
        expect(screen.getByText('Another Title Text')).toBeInTheDocument();
        expect(screen.getByTestId(TITLE_COMPONENT_DATA_TEST_ID).getAttribute('style')).toBe('color: black;');
    })
})