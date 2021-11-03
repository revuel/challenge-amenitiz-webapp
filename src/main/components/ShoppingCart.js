/**
 * Renders a "shopping cart" table meant to be dynamically mutated whenever a cart object changes
 * Rows represent items included in the shopping cart.
 * @param cart
 * @returns {JSX.Element}
 * @constructor
 */
const ShoppingCart = (cart) => {

  return (
    <div>
      <table style={{width: '100%', textAlign:'left'}}>
        <caption>Shopping cart:</caption>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {cart.cart.items ? cart.cart.items.map((item, index) => (
          <tr key={index}>
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>{item.price} €</td>
          </tr>
        )) : null}
        </tbody>
      </table>
      <div style={{float: 'right'}}>
        <h4 style={{marginRight: '200px'}}>Total €: {cart.cart.total_price}</h4>
      </div>
    </div>
  )
}

export default ShoppingCart;