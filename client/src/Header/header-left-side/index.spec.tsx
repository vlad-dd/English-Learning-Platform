import { render, screen, fireEvent } from '@testing-library/react';
import { withReduxProvider, withRouterProvider } from '../../test-utils/hocs';
import { HEADER_AUTOCOMPLETE_DATA_TEST_ID } from '../constants';
import HeaderLeftSide from '.';

const HeaderLeftSideWithProvider = withRouterProvider(withReduxProvider(HeaderLeftSide));

describe('HeaderLeftSide', () => {
    beforeEach(() => {
      render(<HeaderLeftSideWithProvider />);
    });
    it('should render Autocomplete', () => {
        expect(screen.getByTestId(HEADER_AUTOCOMPLETE_DATA_TEST_ID)).toBeInTheDocument();
    });

    it('should render mobile menu', () => {
        expect(screen.getByTestId('mobile-menu-icon')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('mobile-menu-icon'));
        expect(screen.getByTestId('burger-menu')).toBeInTheDocument();
    });
});