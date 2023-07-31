import { acquireReading, taxThreshold } from './lib.js';
import { Reading } from './reading.js';

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const taxbleCharge = taxableChangeFn(aReading);
console.log(taxbleCharge);

function taxableChangeFn(aReading) {
  return Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
}
