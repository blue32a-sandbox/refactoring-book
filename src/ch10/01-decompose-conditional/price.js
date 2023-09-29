if (summer())
  charge = summerCharge();
else
  charge = quantity * plan.regularRate + plan.regularServiceCharge;

function summer() {
  return !aData.isBefore(plan.summerStart) && !aData.isAfter(plan.summerEnd);
}
function summerCharge() {
  return quantity * plan.summerRate;
}
