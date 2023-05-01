import { createSlice } from '@reduxjs/toolkit';

interface ISendReportModalState {
    isOpen: boolean
}

export const initialState: ISendReportModalState = {
    isOpen: false
};

const SendReportSlice = createSlice({
    name: 'send-report',
    initialState,
    reducers: {
        openSendReportModal: (state) => {
            return {...state, isOpen: true};
        },
        closeSendReportModal: (state) => {
            return {...state, isOpen: false};
        },
    }
});

export const { actions, reducer } = SendReportSlice;
export const { openSendReportModal, closeSendReportModal } = actions;


export default SendReportSlice;
