import { acquireReading } from './lib.js';
import { Reading } from './reading.js';

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const taxbleCharge = aReading.taxableChange;
console.log(taxbleCharge);
