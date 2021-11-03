import {render, screen} from '@testing-library/react';
import Items from '../../main/components/Items';


test('renders items component', () => {
  render(
    <Items setCart={() => {}}/>
  );
  const addToCartElement = screen.getByText(/Add to cart/i);
  const removeFromCartElement = screen.getByText(/Remove from cart/i);
  expect(addToCartElement).toBeInTheDocument();
  expect(removeFromCartElement).toBeInTheDocument();
});
