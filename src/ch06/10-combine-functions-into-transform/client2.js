import { acquireReading, baseRate, taxThreshold } from './lib.js';

const aReading = acquireReading();
const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
console.log(base);
const taxbleCharge = Math.max(0, base - taxThreshold(aReading.year));
console.log(taxbleCharge);
