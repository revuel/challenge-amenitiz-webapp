import { render, screen } from '@testing-library/react';
import App from '../../main/App';
import {BrowserRouter} from 'react-router-dom';


test('renders shop screen at root due to RouteSwitcher redirect', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const welcomeElement = screen.getByText(/Welcome to Amenitiz' challenge shopping cart preview/i);
  expect(welcomeElement).toBeInTheDocument();
});
