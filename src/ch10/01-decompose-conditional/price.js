if (!acquireData.isBefore(paln.summerStart) && !acquireData.isAfter(plan.summerEnd))
  charge = quantity * plan.summerRate;
else
  charge = quantity * plan.regularRate + plan.regularServiceCharge;
