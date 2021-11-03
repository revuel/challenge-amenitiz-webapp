import {render, screen} from '@testing-library/react';
import ShoppingCart from '../../main/components/ShoppingCart';


test('renders shopping cart component', () => {
  render(
    <ShoppingCart cart={{cart: {total_price: 0.0, items: []} }}/>
  );
  const shoppingCartElement = screen.getByText(/Shopping cart/i);
  expect(shoppingCartElement).toBeInTheDocument();
});
