import { createSlice, PayloadAction } from '@reduxjs/toolkit';
/* eslint-disable  @typescript-eslint/no-explicit-any */
interface IinitialState {
    user: any
}

const initialState: IinitialState = {
    user: []
};

const registerSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        /* eslint-disable  @typescript-eslint/no-explicit-any */
        register: (state, { payload }: PayloadAction<any>) => {
            return {...state, user: payload};
        }
    }
});

export const { actions, reducer } = registerSlice;
export const { register } = actions;


export default registerSlice;
