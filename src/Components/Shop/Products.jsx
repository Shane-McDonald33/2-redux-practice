import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [{
  id: 'p1',
  price: 6,
  title: 'Bike',
  description: 'Comes with a bell to make you go faster'
},
{
  id: 'p2',
  price: 12,
  title: 'Socks',
  description: 'Keep your tosies wamr'
 },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Test'
          price={6}
          description='First Product Test'
        />
      </ul>
    </section>
  );
};

export default Products;