import { recursiveFactorial } from "../recursiveFactorial";

describe("recursiveFactorial", () => {
  it("should calculate factorial", () => {
    expect(recursiveFactorial(0)).toBe(1);
    expect(recursiveFactorial(1)).toBe(1);
    expect(recursiveFactorial(5)).toBe(120);
    expect(recursiveFactorial(8)).toBe(40320);
    expect(recursiveFactorial(10)).toBe(3628800);
  });
});
