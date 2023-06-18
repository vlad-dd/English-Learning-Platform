import { render, screen } from '@testing-library/react';
import MainInformationBlock from '.';
import { MAIN_INFORMATION_BLOCK_DATA_TEST_ID } from '../../constants';

describe('Main Information Block', () => {
    it('should render component', () => {
        render(<MainInformationBlock />);
        expect(screen.getByTestId(MAIN_INFORMATION_BLOCK_DATA_TEST_ID)).toBeInTheDocument();
    });
});