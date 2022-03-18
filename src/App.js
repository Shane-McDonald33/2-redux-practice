import Cart from './Components/Cart/Cart';
import Layout from './Components/Layout/Layout';
import Products from './Components/Shop/Products';
import Notification from './Components/UI/Notification';
import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { sendCartData, fetchCartData } from './Store/cart-actions';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible)
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    };

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }

  }, [cart, dispatch]);
  
  return (
    <Fragment>
      {notification && <Notification status = {notification.status} title={notification.title} message={notification.message} />}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
