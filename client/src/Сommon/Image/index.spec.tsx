import { render, screen } from '@testing-library/react';
import Image from '.';

const imageMock = 'anyImageUrl';
const mockID = 'mock-id';

describe('Image', () => {

    it('should render image with test id', () => {
        render(<Image id={mockID} url={imageMock} />)
        expect(screen.getByTestId(mockID)).toBeInTheDocument();
    })

    it('should render image', () => {
        render(<Image url={imageMock} />)
        expect(screen.getByRole('img')).toBeInTheDocument();
    })

    it('should render image with passed style attributes', () => {
        render(<Image url={imageMock} styles={{ objectFit: "cover", height: "10px", width: "15px" }} />)
        expect(screen.getByRole('img').getAttribute('src')).toBe('anyImageUrl');
        expect(screen.getByRole('img').getAttribute('style')).toBe('object-fit: cover; height: 10px; width: 15px;')
    })

})