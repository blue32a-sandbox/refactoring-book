class Site {
  get customer() {
    return (this._customer === "unknown") ? createUnknownCustomer() : this._customer;
  }
}

class Customer {
  get isUnknown() {return false;}
  get name() {}
  get billingPlan() {}
  set billingPlan(arg) {}
  get paymentHistory() {}
}

function createUnknownCustomer() {
  return {
    isUnknown: true,
  };
}

function isUnknown(arg) {
  return arg.isUnknown;
}

// Client 1...
const aCustomer = site.customer;
// ... 大量のコードが入る ...
let customerName;
if (isUnknown(aCustomer)) customerName = "occupant";
else customerName = aCustomer.name;

// Client 2...
const plan = isUnknown(aCustomer) ?
      registry.billingPlans.basic
      : aCustomer.billingPlan;

// Client 3...
const weeksDelinquent = isUnknown(aCustomer) ?
      0
      : aCustomer.paymentHistory.weeksDelinquentInLastYear;
