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
    name: "occupant",
    billingplan: registry.billingPlans.basic,
    paymentHistory: {
      weeksDelinquentInLastYear: 0
    }
  };
}

function isUnknown(arg) {
  return arg.isUnknown;
}

// Client 1...
const aCustomer = site.customer;
// ... 大量のコードが入る ...
const customerName = aCustomer.name;

// Client 2...
const plan = aCustomer.billingPlan;

// Client 3...
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
