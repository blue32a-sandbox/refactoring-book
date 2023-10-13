class HeatingPlan {
  get targetTemperature() {
    if      (thermostat.selectedTemperature > this._max) return this._max;
    else if (thermostat.selectedTemperature < this._mix) return this._mix;
    else return thermostat.selectedTemperature;
  }
}

// caller ...
if      (thePlan.targetTemperature > thermostat.currentTemperature) setToHeat();
else if (thePlan.targetTemperature < thermostat.currentTemperature) setToCool();
else setOff();
