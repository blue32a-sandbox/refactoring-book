class HeatingPlan {
  withinRange(bottom, top) {
    return (bottom >= this._tempertureRange.low) && (top <= this._tempertureRange.high);
  }
}

// caller ...
const tempRange = aRoom.daysTempRange;
const low = tempRange.low;
const high = tempRange.high;
const isWithinRange = aPlan.withinRange(low, high);
if (!isWithinRange)
  alerts.push("室温が設定値を超えました");
