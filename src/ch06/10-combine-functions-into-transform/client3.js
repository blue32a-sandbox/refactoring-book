import { acquireReading, enrichReading } from './lib.js';

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;
console.log(basicChargeAmount);
