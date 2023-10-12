class HeatingPlan {
  withinRange(bottom, top) {
    return (bottom >= this._tempertureRange.low) && (top <= this._tempertureRange.high);
  }
  xxNEWwithinRange(aNumberRange) {
  }
}

// caller ...
const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if (!aPlan.withinRange(low, high))
  alerts.push("室温が設定値を超えました");
