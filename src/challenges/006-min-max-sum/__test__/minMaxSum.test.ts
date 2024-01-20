import { minMaxSum } from "../minMaxSum";

describe("minMaxSum", () => {
  it("should find the minimum and maximum values that can be calculated by summing exactly four of the five integers", () => {
    expect(minMaxSum([1,2,3,4,5])).toStrictEqual([10,14]);
    expect(minMaxSum([1,3,5,7,9])).toStrictEqual([16,24]);
  });
});
