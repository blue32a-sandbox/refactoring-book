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
const plan = (isUnknown(aCustomer)) ?
      registry.billingPlans.basic
      : aCustomer.billingPlan;

// Client 3...
if (!isUnknown(aCustomer)) aCustomer.billingPlan = newPlan;

// Client 4...
const weeksDelinquent = isUnknown(aCustomer) ?
      0
      : aCustomer.paymentHistory.weeksDelinquentInLastYear;
