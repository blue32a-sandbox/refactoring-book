import { acquireReading, baseRate } from './lib.js';

const aReading = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading);
console.log(basicChargeAmount);

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}
