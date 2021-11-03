import React from 'react';
import ShoppingCart from '../components/ShoppingCart';
import Items from '../components/Items';
import {getCart} from '../api/CartAPI';

/**
 * Screen to emulate a "shopping cart" behaviour. It includes an "items to buy" part and the "shopping cart" itself
 * @returns {JSX.Element}
 * @constructor
 */
const Shop = () => {

  const [cart, setCart] = React.useState({cart:{total_price: 0.0, items: []}});

  React.useEffect(() => {
    getCart().then(value => {
      setCart(value);
    })
  }, [])

  return (
    <div>
      <h3>Welcome to Amenitiz' challenge shopping cart preview</h3>
      <Items setCart={setCart}/>
      <hr/>
      <ShoppingCart cart={cart}/>
    </div>
  )

}

export default Shop;
