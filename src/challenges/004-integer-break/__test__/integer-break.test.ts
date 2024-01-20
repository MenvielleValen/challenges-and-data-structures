import { integerBreak } from "../integer-break";

describe("integerBreak", () => {
  it("should given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers", () => {

    expect(integerBreak(2)).toStrictEqual(1);
    expect(integerBreak(10)).toStrictEqual(36);
    expect(integerBreak(5)).toStrictEqual(6);
    expect(integerBreak(4)).toStrictEqual(4);
    expect(integerBreak(8)).toStrictEqual(18);
    expect(integerBreak(6)).toStrictEqual(9);

  });
});
