import _ from 'lodash';
import { enrichReading } from './lib.js';

test('check reading unchanged', function() {
  const baseReading = {customer: "ivan", quantity: 10, month: 5, year: 2017};
  const oracle = _.cloneDeep(baseReading);
  enrichReading(baseReading);
  expect(baseReading).toEqual(oracle);
});
