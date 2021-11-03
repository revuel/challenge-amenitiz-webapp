import {Redirect, Route, Switch} from 'react-router-dom';
import LogIn from '../screens/LogIn';
import Shop from '../screens/Shop';

/**
 * Application router/navigator. By default redirects to shop screen/page.
 * @returns {JSX.Element}
 * @constructor
 */
const RouteSwitcher = () =>  {
  return (
    <Switch>
      <Route exact path='/'
         render={() => {
           return (
             <Redirect to='/shop' />
           )
         }}
      />
      <Route exact path='/login'>
        <LogIn />
      </Route>
      <Route exact path='/shop'>
        <Shop />
      </Route>
    </Switch>
  );
}

export default RouteSwitcher;
