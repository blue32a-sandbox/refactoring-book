import _ from 'lodash';

export function acquireReading() {
  return {customer: "ivan", quantity: 10, month: 5, year: 2017};
}
export function baseRate(month, year) {
  return 0.3;
}
export function taxThreshold(year) {
  return 1;
}
export function enrichReading(original) {
  const result = _.cloneDeep(original);
  return result;
}
