import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from 'lodash';
import { withIntlProvider, withReduxProvider, withRouterProvider } from '../../test-utils/hocs';
import { APPLICATION_USER_STATUS } from '../../Сommon/constants';
import HeaderRightSide from '.';
import { HEADER_DROPDOWN_MENU_DATA_TEST_ID } from '../constants';

const HeaderRightSideWithProvider = withRouterProvider(withReduxProvider(withIntlProvider(HeaderRightSide)));

describe('HeaderLeftSide', () => {

    describe('When user exists', () => {
        const handleSignOut = jest.fn();

        beforeEach(() => {
            render(<HeaderRightSideWithProvider enteredUser={{ email: 'test@gmail.com' }} handleSignOut={handleSignOut} />);
        });

        it('should render HeaderLeftSide', () => {
            expect(screen.getByText('test@gmail.com')).toBeInTheDocument();
            expect(screen.queryAllByRole('img').at(0)).toBeInTheDocument();
        });

        it('should render header dropdown menu', () => {
            const menuItems = ['Profile', 'Sign out'];
            fireEvent.click(screen.getByText('test@gmail.com'))
            expect(screen.getByTestId(HEADER_DROPDOWN_MENU_DATA_TEST_ID)).toBeInTheDocument();
            menuItems.forEach((menuItem) => expect(screen.getByText(menuItem)).toBeInTheDocument())
        });

        it('should call handleSignOut method if clicked', () => {
            fireEvent.click(screen.getByText('test@gmail.com'))
            fireEvent.click(screen.getByText('Sign out'))
            expect(handleSignOut).toHaveBeenCalled();
        });
    });

    describe('When user does not exist', () => {
        beforeEach(() => {
            render(<HeaderRightSideWithProvider enteredUser={null} handleSignOut={noop} />);
        });

        it('should render HeaderLeftSide', () => {
            expect(screen.getByText(APPLICATION_USER_STATUS.GUEST)).toBeInTheDocument();
            expect(screen.queryAllByRole('img').at(0)).toBeInTheDocument();
        });
    });
});