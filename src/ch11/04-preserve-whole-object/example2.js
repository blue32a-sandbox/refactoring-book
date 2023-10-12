class HeatingPlan {
  withinRange(bottom, top) {
    return (bottom >= this._tempertureRange.low) && (top <= this._tempertureRange.high);
  }
  xxNEWwithinRange(tempRange) {
    const low = tempRange.low;
    const high = tempRange.high;
    const isWithinRange = this.withinRange(low, high);
    return isWithinRange;
  }
}

// caller ...
const tempRange = aRoom.daysTempRange;
const isWithinRange = aPlan.xxNEWwithinRange(tempRange);
if (!isWithinRange)
  alerts.push("室温が設定値を超えました");
