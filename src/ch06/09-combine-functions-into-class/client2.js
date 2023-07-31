import { acquireReading, baseRate, taxThreshold } from './lib.js';
import { Reading } from './reading.js';

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
console.log(base);
const taxbleCharge = Math.max(0, base - taxThreshold(aReading.year));
console.log(taxbleCharge);
