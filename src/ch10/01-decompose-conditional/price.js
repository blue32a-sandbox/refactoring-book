if (summer())
  charge = summerCharge();
else
  charge = regularChage();

function summer() {
  return !aData.isBefore(plan.summerStart) && !aData.isAfter(plan.summerEnd);
}
function summerCharge() {
  return quantity * plan.summerRate;
}
function regularChage() {
  return quantity * plan.regularRate + plan.regularServiceCharge;
}
