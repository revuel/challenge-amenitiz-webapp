import {getEndPoint} from '../../main/api/Endpoint';


test('Endpoint is well formed', () => {
  expect(getEndPoint()).toBe('http://0.0.0.0:8000');
});
