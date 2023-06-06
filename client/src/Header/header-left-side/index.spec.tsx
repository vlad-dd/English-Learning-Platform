import { render, screen, fireEvent } from '@testing-library/react';
import HeaderLeftSide from '.';
import { withReduxProvider, withRouterProvider } from '../../test-utils/hocs';

const HeaderLeftSideWithProvider = withRouterProvider(withReduxProvider(HeaderLeftSide));

describe('HeaderLeftSide', () => {
    it('should render Autocomplete', () => {
        render(<HeaderLeftSideWithProvider />);
        expect(screen.getByTestId('header-autocomplete')).toBeInTheDocument();
        expect(screen.getByTestId('header-autocomplete').getAttribute("style")).toBe("width: 35vw;");
    });

    it('should render mobile menu', () => {
        render(<HeaderLeftSideWithProvider />);
        expect(screen.getByTestId('mobile-menu-icon')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('mobile-menu-icon'));
        expect(screen.getByTestId('burger-menu')).toBeInTheDocument();
    });
});