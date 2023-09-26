function distanceTravelled(scenario, time) {
  let result;
  const primaryAcceleration = scenario.primaryForce / scenario.mass;
  let primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime;
  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    let PrimaryVelocity = primaryAcceleration * scenario.delay;
    const secoundaryAcceleration = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result += PrimaryVelocity * secondaryTime +
      0.5 * secoundaryAcceleration * secondaryTime * secondaryTime;
  }
  return result;
}
