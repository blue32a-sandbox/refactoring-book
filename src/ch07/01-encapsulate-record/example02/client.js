import { getCustomerData, getRawDataOfCustomers } from "./customer.js";

getCustomerData().setUsage("1920", "2016", "1", 70);
console.log(getRawDataOfCustomers()["1920"].usages["2016"]["1"]);

function compareUsage(customerID, laterYear, month) {
  const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
  const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
  return {laterAmount: later, change: later - earlier} // 前年同月比較
}

console.log(compareUsage("1920", "2016", "2"));
