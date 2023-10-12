class HeatingPlan {
  withinRange(aNumberRange) {
    return (aNumberRange.low >= this._tempertureRange.low) &&
      (aNumberRange.high <= this._tempertureRange.high);
  }
}

// caller ...
if (!aPlan.withinRange(aRoom.daysTempRange))
  alerts.push("室温が設定値を超えました");
