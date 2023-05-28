import { createSlice } from '@reduxjs/toolkit';

interface ITranslation {
    language: string
}

export const initialState: ITranslation = {
    language: 'US'
};

const LanguageTranslationSlice = createSlice({
    name: 'translation',
    initialState,
    reducers: {
        setTranslationLanguage: (state, { payload }) => {
            return {...state, language: payload};
        },
    }
});

export const { actions, reducer } = LanguageTranslationSlice;
export const { setTranslationLanguage } = actions;


export default LanguageTranslationSlice;
