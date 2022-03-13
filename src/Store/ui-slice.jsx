import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialUiState = { cartIsVisible: false};

const UISlice = createSlice({
    name: 'ui',
    initialState: initialUiState,
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
});

export const UIActions = UISlice.actions
export default UISlice;