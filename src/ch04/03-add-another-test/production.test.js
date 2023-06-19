import { Province, sampleProvinceData } from "./production";

describe('province', () => {
  let asia;
  beforeEach(() => {
    asia = new Province(sampleProvinceData());
  });
  test('shortfall', () => {
    expect(asia.shortfall).toBe(5);
  });
  test('profit', () => {
    expect(asia.profit).toBe(230);
  });
});
