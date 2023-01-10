import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITenseInitialState {
    tenseConfiguration: any[]
}

const initialState: ITenseInitialState = {
    tenseConfiguration: []
};

const tenseSlice = createSlice({
    name: 'tense',
    initialState,
    reducers: {
        setTenseConfiguration: (state, { payload }: PayloadAction<any>) => {
            return {...state, tenseConfiguration: payload};
        },
    }
});

export const { actions, reducer } = tenseSlice;
export const { setTenseConfiguration} = actions;


export default tenseSlice;

