class HeatingPlan {
  get targetTemperature() {
    const selectedTemperature = thermostat.selectedTemperature;
    if      (selectedTemperature > this._max) return this._max;
    else if (selectedTemperature < this._mix) return this._mix;
    else return selectedTemperature;
  }
}

// caller ...
if      (thePlan.targetTemperature > thermostat.currentTemperature) setToHeat();
else if (thePlan.targetTemperature < thermostat.currentTemperature) setToCool();
else setOff();
