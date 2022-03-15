import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch} from 'react-redux';
import { cartActions } from '../../Store/cart-slice'

// const ProductItem = (props) => {
//   const { title, price, description } = props;

//   return (
//     <li className={classes.item}>
//       <Card>
//         <header>
//           <h3>{title}</h3>
//           <div className={classes.price}>${price.toFixed(2)}</div>
//         </header>
//         <p>{description}</p>
//         <div className={classes.actions}>
//           <button>Add to Cart</button>
//         </div>
//       </Card>
//     </li>
//   );
// };

// export default ProductItem;


const ProductItem = (props) => {
  const dispatch = useDispatch()
  const { title, price, description } = props;
  addToCartHandler = (event) => {
    dispatch(cartActions.addItemToCart())
  }
  return (
    <li className={classes.item}>
     <Card>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>${price.toFixed(2)}</div>
      </header>
      <p>{description}</p>
      <div className={classes.action}>
       <button>Add to Cart</button>
      </div>
      </Card>  
    </li>
  )
};

export default ProductItem;