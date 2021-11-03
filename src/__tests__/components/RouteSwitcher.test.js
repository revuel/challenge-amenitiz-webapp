import {render, screen} from '@testing-library/react';
import RouteSwitcher from '../../main/components/RouteSwitcher';
import {BrowserRouter} from 'react-router-dom';


test('renders route switcher component', () => {
  render(
    <BrowserRouter>
      <RouteSwitcher/>
    </BrowserRouter>
  );
  const shoppingCartElement = screen.getByText(/Welcome to Amenitiz' challenge shopping cart preview/i);
  expect(shoppingCartElement).toBeInTheDocument();
});
