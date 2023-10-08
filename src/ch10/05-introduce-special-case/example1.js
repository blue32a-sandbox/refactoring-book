class Site {
  get customer() {return this._customer;}
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
}

// Client 1...
const aCustomer = site.customer;
// ... 大量のコードが入る ...
let customerName;
if (aCustomer === "unknown") customerName = "occupant";
else customerName = aCustomer.name;

// Client 2...
const plan = (aCustomer === "unknown") ?
      registry.billingPlans.basic
      : aCustomer.billingPlan;

// Client 3...
if (aCustomer !== "unknown") aCustomer.billingPlan = newPlan;

// Client 4...
const weeksDelinquent = (aCustomer === "unknown") ?
      0
      : aCustomer.paymentHistory.weeksDelinquentInLastYear;
