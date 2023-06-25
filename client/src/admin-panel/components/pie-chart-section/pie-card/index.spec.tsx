import { render, screen } from '@testing-library/react';
import PieCard from '.';

const PROCESS_TAG_CONTENT = [
    "Priority: Main",
    "Progress: Ongoing",
    "Level: Low"
];

describe('Pie Card', () => {
    const props = {
        id: 1,
        title: 'title-1', 
        value: 'value-1'
    }
    it('should render component', () => {
        render(<PieCard {...props} />);
        PROCESS_TAG_CONTENT.forEach((content: string) => expect(screen.getByText(content)).toBeInTheDocument());
        expect(screen.getByText(props.title)).toBeInTheDocument();
        expect(screen.getByText(props.value)).toBeInTheDocument();
    });
});