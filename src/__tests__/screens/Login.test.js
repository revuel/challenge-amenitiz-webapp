import {render, screen} from '@testing-library/react';

import LogIn from '../../main/screens/LogIn';


test('renders login screen', () => {
  render(
    <LogIn/>
  );
  const logInElement = screen.getByText(/This is the login page/i);
  expect(logInElement).toBeInTheDocument();

});
