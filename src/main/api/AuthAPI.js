import {getEndPoint} from './Endpoint';
import {APIError} from './APIError';

/**
 * GET users endpoint. Not really used.
 * @returns {Promise<any>}
 */
export const getUser = async () => {

  try {
    let response = await fetch(`${getEndPoint()}/users/`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })

    return await response.json();

  } catch (error) {
    throw new APIError(error.message);
  }
}