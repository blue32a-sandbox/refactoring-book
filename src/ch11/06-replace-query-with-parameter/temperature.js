class HeatingPlan {
  targetTemperature(selectedTemperature) {
    if      (selectedTemperature > this._max) return this._max;
    else if (selectedTemperature < this._mix) return this._mix;
    else return selectedTemperature;
  }
}

// caller ...
if      (thePlan.targetTemperature(thermostat.selectedTemperature) > thermostat.currentTemperature) setToHeat();
else if (thePlan.targetTemperature(thermostat.selectedTemperature) < thermostat.currentTemperature) setToCool();
else setOff();
