import {getEndPoint} from './Endpoint';
import {APIError} from './APIError';

/**
 * GET carts endpoint
 * @returns {Promise<any>}
 */
export const getCart = async () => {

  try {
    let response = await fetch(`${getEndPoint()}/carts/id/?cart_id=1`,
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

export default getCart();
