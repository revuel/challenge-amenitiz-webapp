import {addToCart, getItems, removeFromCart} from '../api/ItemAPI';
import React from 'react';
import {applyRules} from '../api/RuleAPI';
import {getCart} from '../api/CartAPI';

/**
 * Renders a table which rows represent items
 * Cart is always updated whenever an item is added or removed to the cart through the controls (buttons) present here
 * @param setCart function to update's parent component
 * @returns {JSX.Element}
 * @constructor
 */
const Items = ({setCart}) => {

  const [items, setItems] = React.useState(null);

  React.useEffect(() => {
    getItems().then(value => {
      setItems(value);
    })
  }, [])

  return (
    <div>
      <table style={{width: '100%', textAlign:'left'}}>
        <caption>Items:</caption>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Price</th>
            <th>Add to cart</th>
            <th>Remove from cart</th>
          </tr>
        </thead>
        <tbody>
        {items && items.map((item) => (
          <tr>
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>{item.price} €</td>
            <td>
              <button onClick={() => {
                addToCart(item.id).then(() => {
                  applyRules().then(() => {
                    getCart().then((cart) => {
                      setCart(cart)
                    })
                  })
                })
              }}>+</button>
            </td>
            <td>
              <button onClick={() => {
                removeFromCart(item.id).then(() => {
                  applyRules().then(() => {
                    getCart().then((cart) => {
                      setCart(cart)
                    })
                  })
                })
              }}>-</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )

}

export default Items;