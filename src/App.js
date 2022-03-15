import Cart from './Components/Cart/Cart';
import Layout from './Components/Layout/Layout';
import Products from './Components/Shop/Products';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible)
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch('https://react-posting-default-rtdb.firebaseio.com/cart.json', { method: 'PUT', body: JSON.stringify(cart) })
  }, [cart]);
  
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
