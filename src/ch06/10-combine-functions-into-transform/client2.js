import { acquireReading, enrichReading } from './lib.js';

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
console.log(aReading.baseCharge);
console.log(aReading.taxbleCharge);
