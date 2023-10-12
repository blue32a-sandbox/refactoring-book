class HeatingPlan {
  withinRange(tempRange) {
    return (tempRange.low >= this._tempertureRange.low) &&
      (tempRange.high <= this._tempertureRange.high);
  }
}

// caller ...
const tempRange = aRoom.daysTempRange;
const isWithinRange = aPlan.withinRange(tempRange);
if (!isWithinRange)
  alerts.push("室温が設定値を超えました");
