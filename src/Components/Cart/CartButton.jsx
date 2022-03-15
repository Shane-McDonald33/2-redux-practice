// import classes from './CartButton.module.css';

// const CartButton = (props) => {
//   return (
//     <button className={classes.button}>
//       <span>My Cart</span>
//       <span className={classes.badge}>1</span>
//     </button>
//   );
// };

// export default CartButton;

import classes from './CartButton.module.css';
import { UIActions } from '../../Store/ui-slice';
import { useDispatch, useSelector } from 'react-redux'

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity)
  const toggleCartHandler = (event) => {
    event.preventDefault();
    dispatch(UIActions.toggle())
  }
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  )
}

export default CartButton;