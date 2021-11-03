import {render, screen} from '@testing-library/react';
import Shop from '../../main/screens/Shop';


test('renders shop screen', () => {
  render(
    <Shop/>
  );
  const shopElement = screen.getByText(/Shopping cart:/i);
  const itemsElement = screen.getByText(/Items:/i);
  expect(shopElement).toBeInTheDocument();
  expect(itemsElement).toBeInTheDocument();
});
