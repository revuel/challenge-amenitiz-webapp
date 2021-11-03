import { render, screen } from '@testing-library/react';
import App from '../main/App';
import {BrowserRouter} from 'react-router-dom';

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue({cart: {total_price: 0.0, items:[]}})
  })
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const welcomeElement = screen.getByText(/Welcome to Amenitiz' challenge shopping cart preview/i);
  expect(welcomeElement).toBeInTheDocument();
});
