import Cart from './Components/Cart/Cart';
import Layout from './Components/Layout/Layout';
import Products from './Components/Shop/Products';
import Notification from './Components/UI/Notification';
import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { UIActions } from './Store/ui-slice';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible)
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(UIActions.showNotification({
        status: 'success',
        title: 'Success.',
        message: 'Data Sent Successfully...',
      }));
    };

    if (isInitial) {
      isInitial = false;
      return
    }
    sendCartData().catch(error => {
      dispatch(UIActions.showNotification({
        status: 'Error',
        title: 'Error...',
        message: 'Sending Cart Data Failed...'
      }))
    })
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
