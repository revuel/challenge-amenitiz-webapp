import {getEndPoint} from './Endpoint';
import {APIError} from './APIError';

/**
 * GET items endpoint
 * @returns {Promise<any>}
 */
export const getItems = async () => {

  try {
    let response = await fetch(`${getEndPoint()}/items/`,
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

/**
 * POST item to cart endpoint
 * Notes: Cart ID is always the same, since this is just a demo challenge (it would not be hard to de-hardcode it :))
 * @param item_id
 * @returns {Promise<any>}
 */
export const addToCart = async (item_id) => {

  try {
    let response = await fetch(`${getEndPoint()}/items/add_to_cart?item_id=${item_id}&cart_id=1`,
      {
        method: 'POST',
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

/**
 * POST remove item from cart endpoint
 * Notes: Cart ID is always the same, since this is just a demo challenge (it would not be hard to de-hardcode it :))
 * @param item_id
 * @returns {Promise<any>}
 */
export const removeFromCart = async (item_id) => {

  try {
    let response = await fetch(`${getEndPoint()}/items/remove_from_cart?item_id=${item_id}&cart_id=1`,
      {
        method: 'POST',
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
