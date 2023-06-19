import { fireEvent, render, screen } from '@testing-library/react';
import * as ReactRedux from 'react-redux';
import { closeUserProfileModal } from '../../../store/reducers/user-profile-modal';
import { withApolloProvider, withIntlProvider, withRouterProvider } from '../../../test-utils/hocs';
import ProfileModal from '.';
import { 
    CLOSE_PROFILE_MODAL_BUTTON_DATA_TEST_ID, 
    COMMUNICATION_BLOCK_DATA_TEST_ID, 
    MAIN_INFORMATION_BLOCK_DATA_TEST_ID, 
    PROFILE_MODAL_DATA_TEST_ID 
} from './constants';

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: jest.fn(),
    useSelector: () => ({ isOpen: true })
}));

jest.mock("./components/main-information-block", () => () => <div data-testid="main-information-block" />);
jest.mock("./components/communication-block", () => () => <div data-testid="communication-block" />);

const ProfileModalWithProvider = withApolloProvider(withRouterProvider(withIntlProvider(ProfileModal)));

describe('Profile modal', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(ReactRedux, "useDispatch");
    beforeEach(() => {
        useDispatch.mockReturnValue(dispatch);
        render(<ProfileModalWithProvider />);
    });

    it('should render profile', () => {
        expect(screen.getByTestId(MAIN_INFORMATION_BLOCK_DATA_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(COMMUNICATION_BLOCK_DATA_TEST_ID)).toBeInTheDocument();
    });

    it('should call dispatch if user has closed the modal through escape', () => {
        fireEvent.keyDown(screen.getByTestId(PROFILE_MODAL_DATA_TEST_ID), { key: "Escape" });
        expect(dispatch).toBeCalledTimes(1);
        expect(dispatch).toBeCalledWith(closeUserProfileModal());
    });

    it('should call dispatch if user has closed the modal through button', () => {
        fireEvent.click(screen.getByTestId(CLOSE_PROFILE_MODAL_BUTTON_DATA_TEST_ID));
        expect(dispatch).toBeCalledTimes(1);
        expect(dispatch).toBeCalledWith(closeUserProfileModal());
    });
})