import { acquireReading, taxThreshold } from './lib.js';
import { Reading } from './reading.js';

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const taxbleCharge = Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
console.log(taxbleCharge);
