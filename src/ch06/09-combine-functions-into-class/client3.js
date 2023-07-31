import { acquireReading } from './lib.js';
import { Reading } from './reading.js';

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.baseCharge;
console.log(basicChargeAmount);
