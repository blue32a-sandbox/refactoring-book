class HeatingPlan {
  withinRange(bottom, top) {
    return (bottom >= this._tempertureRange.low) && (top <= this._tempertureRange.high);
  }
  xxNEWwithinRange(aNumberRange) {
    return this.withinRange(aNumberRange.low, aNumberRange.high);
  }
}

// caller ...
if (!aPlan.xxNEWwithinRange(aRoom.daysTempRange))
  alerts.push("室温が設定値を超えました");
