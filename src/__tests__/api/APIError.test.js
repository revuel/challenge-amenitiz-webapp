import {APIError} from '../../main/api/APIError';


test('APIError is of type APIError', () => {
  let errorMsg = 'Some error';
  let apiError = new APIError(errorMsg);
  expect(apiError.message).toBe(errorMsg);
  expect(apiError.name).toBe('APIError');
  expect(apiError).toBeInstanceOf(Error)
});
