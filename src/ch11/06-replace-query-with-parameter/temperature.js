class HeatingPlan {
  get targetTemperature() {
    return this.xxNEWtargetTemperature(thermostat.selectedTemperature);
  }
  xxNEWtargetTemperature(selectedTemperature) {
    if      (selectedTemperature > this._max) return this._max;
    else if (selectedTemperature < this._mix) return this._mix;
    else return selectedTemperature;
  }
}

// caller ...
if      (thePlan.xxNEWtargetTemperature(thermostat.selectedTemperature) > thermostat.currentTemperature) setToHeat();
else if (thePlan.xxNEWtargetTemperature(thermostat.selectedTemperature) < thermostat.currentTemperature) setToCool();
else setOff();
