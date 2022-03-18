import { UIActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://react-posting-default-rtdb.firebaseio.com//cart.json');
            if (!response.ok) {
                throw new Error ('Could Not Fetch Cart Data')
            }
            const responseData = await response.json();
            return responseData
        };
        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(cartData));
        } catch (error) {
            dispatch(
                UIActions.showNotification({
                  status: 'error',
                  title: 'Error!',
                  message: 'Fetching cart data failed!',
                })
              );
        }
    }
}


export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        UIActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );
  
      const sendRequest = async () => {
        const response = await fetch(
          'https://react-posting-default-rtdb.firebaseio.com//cart.json',
          {
            method: 'PUT',
            body: JSON.stringify(cart),
          }
        );
  
        if (!response.ok) {
          throw new Error('Sending cart data failed.');
        }
      };
  
      try {
        await sendRequest();
  
        dispatch(
          UIActions.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Sent cart data successfully!',
          })
        );
      } catch (error) {
        dispatch(
          UIActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Sending cart data failed!',
          })
        );
      }
    };
}