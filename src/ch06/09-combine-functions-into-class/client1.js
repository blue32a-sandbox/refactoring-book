import { acquireReading, baseRate } from './lib.js';
import { Reading } from './reading.js';

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
console.log(baseCharge);
