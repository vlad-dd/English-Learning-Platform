import { createSlice } from '@reduxjs/toolkit';

interface IUserProfileModal {
    isOpen: boolean
}

export const initialState: IUserProfileModal = {
    isOpen: false
};

const UserProfileSlice = createSlice({
    name: 'user-profile',
    initialState,
    reducers: {
        openUserProfileModal: (state) => {
            return {...state, isOpen: true};
        },
        closeUserProfileModal: (state) => {
            return {...state, isOpen: false};
        },
    }
});

export const { actions, reducer } = UserProfileSlice;
export const { openUserProfileModal, closeUserProfileModal } = actions;


export default UserProfileSlice;
