import {getEndPoint} from './Endpoint';
import {APIError} from './APIError';

/**
 * POST apply rules endpoint
 * Notes: Cart ID is always the same, since this is just a demo challenge (it would not be hard to dehardcode it :))
 * @returns {Promise<any>}
 */
export const applyRules = async () => {

  try {
    let response = await fetch(`${getEndPoint()}/rules/apply?cart_id=1`,
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
