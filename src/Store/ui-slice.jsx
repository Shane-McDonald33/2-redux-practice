import { createSlice } from '@reduxjs/toolkit';

const initialUiState = { cartIsVisible: false, notification: null};

const UISlice = createSlice({
    name: 'ui',
    initialState: initialUiState,
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
        showNotification(state, action) {
            state.notification = { 
                status: action.payload.status, 
                title: action.payload.title,
                message: action.payload.message}
        }
    }
});

export const UIActions = UISlice.actions
export default UISlice;