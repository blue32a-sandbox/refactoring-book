import _ from "lodash";

function enrichSite(inputSite) {
  const result = _.cloneDeep(inputSite);
  const unknownCustomer = {
    isUnknown: true,
  }

  if (isUnknown(result.customer)) result.customer = unknownCustomer;
  else result.customer.isUnknown = false;
  return result;
}

function isUnknown(arg) {
  if (arg === "unknown") return true;
  else return arg.isUnknown;
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
