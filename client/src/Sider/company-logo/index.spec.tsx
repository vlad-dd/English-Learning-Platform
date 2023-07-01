import { render, screen } from '@testing-library/react'
import { withRouterProvider } from '../../test-utils/hocs';
import CompanyLogo from '.';
import { APPLICATION_NAVIGATION } from '../../Сommon/constants';

const CompanyLogoWithProvider = withRouterProvider(CompanyLogo);

describe('Company Logo', () => {
    it('should render company logo with default theme', () => {
        render(<CompanyLogoWithProvider />)
        expect(screen.getByRole('img')).toBeInTheDocument();
        expect(screen.getByRole('img').getAttribute('src')).toBe('white.svg');
        expect(screen.getByRole('link').getAttribute('href')).toBe(APPLICATION_NAVIGATION.HOME);
    });
});