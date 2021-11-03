import RouteSwitcher from './components/RouteSwitcher';

/**
 * Essentially just delegates route rendering to the RouteSwitcher component.
 * Notes: No CSS
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
  return (
    <RouteSwitcher/>
  )
}

export default App;
