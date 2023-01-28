import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICarouselInitialState {
    actualSentenceIndex: number,
    points: number
}

export const initialState: ICarouselInitialState = {
    actualSentenceIndex: 0,
    points: 0,
};

const carouselSlice = createSlice({
    name: 'carousel',
    initialState,
    reducers: {
        setActualSentenceIndex: (state, { payload }: PayloadAction<number>) => {
            return {...state, actualSentenceIndex: payload};
        },
        setEarnedPoints: (state, { payload }: PayloadAction<number>) => {
            return {...state, points: payload};
        },
    }
});

export const { actions, reducer } = carouselSlice;
export const { setActualSentenceIndex, setEarnedPoints } = actions;


export default carouselSlice;

