import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IinitialState {
    path: string[]
}

const initialState: IinitialState = {
    path: []
};

const breadCrumbSlice = createSlice({
    name: 'breadCrumb',
    initialState,
    reducers: {
        breadcrumbPath: (state, { payload }: PayloadAction<string[]>) => {
            return {...state, path: payload};
        }
    }
});

export const { actions, reducer } = breadCrumbSlice;
export const { breadcrumbPath } = actions;


export default breadCrumbSlice;

