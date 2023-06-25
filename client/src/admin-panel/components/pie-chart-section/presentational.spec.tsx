import { render, screen } from '@testing-library/react';
import PieChartSection from './presentational';
import { PIE_CARD_DATA_TEST_ID } from '../../constants';

describe('Pie Card Section', () => {
    it('should render component', () => {
        render(<PieChartSection />);
        expect(screen.getByTestId(PIE_CARD_DATA_TEST_ID)).toBeInTheDocument();
    });
});