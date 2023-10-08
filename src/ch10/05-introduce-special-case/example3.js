import _ from "lodash";

function enrichSite(inputSite) {
  return _.cloneDeep(inputSite);
}

function isUnknown(arg) {
  return arg === "unknown";
}

// Client 1...
const rawSite = acquireSiteData();
const site = enrichSite(rawSite);
const aCustomer = site.customer;
// ... 大量のコードが入る ...
let customerName;
if (isUnknown(aCustomer)) customerName = "occupant";
else customerName = aCustomer.name;

// Client 2...
const plan = (isUnknown(aCustomer)) ?
      registry.billingPlans.basic
      : aCustomer.billingPlan;

// Client 3...
const weeksDelinquent = (isUnknown(aCustomer)) ?
      0
      : aCustomer.paymentHistory.weeksDelinquentInLastYear;
