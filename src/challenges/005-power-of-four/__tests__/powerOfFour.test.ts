import { isPowerOfFour } from "../powerOfFour";

describe("isPowerOfFour", () => {
  it("should given an integer n, return true if it is a power of four. Otherwise, return false", () => {

    expect(isPowerOfFour(1)).toBeTruthy();
    expect(isPowerOfFour(4)).toBeTruthy();
    expect(isPowerOfFour(64)).toBeTruthy();
    expect(isPowerOfFour(256)).toBeTruthy();
    expect(isPowerOfFour(3)).toBeFalsy();
    expect(isPowerOfFour(8)).toBeFalsy();
    expect(isPowerOfFour(2186)).toBeFalsy();
  });
});
