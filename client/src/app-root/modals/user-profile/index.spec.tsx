import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProfileModal from '.';
import * as ReactRedux from 'react-redux';
import { COMMUNICATION_BLOCK_ID, MAIN_INFORMATION_BLOCK_ID, PROFILE_MODAL_ID } from './constants';
import { closeUserProfileModal } from '../../../store/reducers/user-profile-modal';
import { withApolloProvider, withRouterProvider } from '../../../test-utils/hocs';

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: jest.fn(),
    useSelector: () => ({ isOpen: true })
}));

jest.mock("./components/main-information-block", () => () => <div data-testid="main-information-block" />);
jest.mock("./components/communication-block", () => () => <div data-testid="communication-block" />);

const ProfileModalWithProvider = withApolloProvider(withRouterProvider(ProfileModal));

describe('Profile modal', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(ReactRedux, "useDispatch");
    beforeEach(() => {
        useDispatch.mockReturnValue(dispatch);
        render(<ProfileModalWithProvider />);
    });

    it('should render profile', () => {
        expect(screen.getByTestId(MAIN_INFORMATION_BLOCK_ID)).toBeInTheDocument();
        expect(screen.getByTestId(COMMUNICATION_BLOCK_ID)).toBeInTheDocument();
    });

    it('should call dispatch if user has closed the modal through escape', () => {
        fireEvent.keyDown(screen.getByTestId(PROFILE_MODAL_ID), { key: "Escape" });
        expect(dispatch).toBeCalledTimes(1);
        expect(dispatch).toBeCalledWith(closeUserProfileModal());
    });

    it('should call dispatch if user has closed the modal through button', () => {
        fireEvent.click(screen.getByTestId("close-profile-modal-button"));
        expect(dispatch).toBeCalledTimes(1);
        expect(dispatch).toBeCalledWith(closeUserProfileModal());
    });
})