import _ from "lodash";

function enrichSite(inputSite) {
  const result = _.cloneDeep(inputSite);
  const unknownCustomer = {
    isUnknown: true,
    name: "occupant",
    billingPlan: registry.billingPlans.basic,
    paymentHistory: {
      weeksDelinquentInLastYear: 0,
    },
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
const customerName = aCustomer.name;

// Client 2...
const plan = aCustomer.billingPlan;

// Client 3...
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
