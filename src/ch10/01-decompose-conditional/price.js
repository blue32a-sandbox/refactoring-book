if (summer())
  charge = quantity * plan.summerRate;
else
  charge = quantity * plan.regularRate + plan.regularServiceCharge;

function summer() {
  return !aData.isBefore(plan.summerStart) && !aData.isAfter(plan.summerEnd);
}
