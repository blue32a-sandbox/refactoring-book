class HeatingPlan {
  withinRange(tempRange) {
    return (tempRange.low >= this._tempertureRange.low) &&
      (tempRange.high <= this._tempertureRange.high);
  }
}

// caller ...
if (!aPlan.withinRange(aRoom.daysTempRange))
  alerts.push("室温が設定値を超えました");
