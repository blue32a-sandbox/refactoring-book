class Site {
  get customer() {
    return (this._customer === "unknown") ? new UnknownCustomer() : this._customer;
  }
}

class Customer {
  get isUnknown() {return false;}
  get name() {}
  get billingPlan() {}
  set billingPlan(arg) {}
  get paymentHistory() {}
}

class UnknownCustomer {
  get isUnknown() {return true;}
  get name() {return "occupant";}
  get billingPlan() {return registry.billingPlans.basic;}
  set billingPlan(arg) { /* 何もしない */ }
}

function isUnknown(arg) {
  if (!(arg instanceof Customer || arg instanceof UnknownCustomer))
    throw new Error(`不正な値について要調査: <${arg}>`);
  return arg.isUnknown;
}

// Client 1...
const aCustomer = site.customer;
// ... 大量のコードが入る ...
let customerName= aCustomer.name;

// Client 2...
const plan = aCustomer.billingPlan;

// Client 3...
aCustomer.billingPlan = newPlan;

// Client 4...
const weeksDelinquent = isUnknown(aCustomer) ?
      0
      : aCustomer.paymentHistory.weeksDelinquentInLastYear;
