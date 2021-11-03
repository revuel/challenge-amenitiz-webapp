import {ROUTES} from '../../main/common/Routes';

test('ROUTES includes two route entries', () => {
  expect(ROUTES).toHaveLength(2);
});