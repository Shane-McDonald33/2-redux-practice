import { createSlice } from '@reduxjs/toolkit';

const cartInitialState = { items: [], totalQuantity: 0}

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: {
        addItemToCart(state,action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({id: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, name: newItem.title})
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state,action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            if(existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
});

const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(UIActions.showNotification({
            status: 'pending',
            title: 'sending...',
            message: 'Sending Cart Data...'
          }))
          const response = await fetch('https://react-posting-default-rtdb.firebaseio.com/cart.json', { 
            method: 'PUT', 
            body: JSON.stringify(cart) 
          })
          if (!response.ok) {
           throw new Error ('Data Not Sent Successfully...')
          };
    };
}

export const cartActions = cartSlice.actions;
export default cartSlice;