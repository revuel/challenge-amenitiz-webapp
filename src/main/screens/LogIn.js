import {useHistory} from 'react-router-dom';
import {ROUTES} from '../common/Routes';
import {getUser} from '../api/AuthAPI';

/**
 * Not really used, there is no authentication mechanism implemented so feel free to ignore this.
 * @returns {JSX.Element}
 * @constructor
 */
const LogIn = () => {

  const history = useHistory();

  return (
    <div>
      <p>This is the login page</p>
      <form onSubmit={event => event.preventDefault()}>
        <input type='text'/>
        <input type='text'/>
        <button onClick={() => {
          getUser().then((value) => {
            history.push(ROUTES[1].path)
          })
        }}>
          OK
        </button>
      </form>
    </div>
  )
}

export default LogIn;