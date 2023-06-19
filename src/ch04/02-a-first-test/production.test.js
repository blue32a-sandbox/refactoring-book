import { Province, sampleProvinceData } from "./production";

describe('province', () => {
  test('shortfall', () => {
    const asia = new Province(sampleProvinceData());
    expect(asia.shortfall).toBe(5);
  });
});
