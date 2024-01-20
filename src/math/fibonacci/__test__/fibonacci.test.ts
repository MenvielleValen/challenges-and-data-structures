import { fibonacci } from "../fibonacci";

describe("fibonacci", () => {
  it("should calculate fibonacci", () => {
    expect(fibonacci(1)).toEqual([1]);
    expect(fibonacci(3)).toEqual([1, 1, 2]);
    expect(fibonacci(5)).toEqual([1, 1, 2, 3, 5]);
    expect(fibonacci(7)).toEqual([1, 1, 2, 3, 5, 8, 13]);
    expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    expect(fibonacci(12)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]);
    expect(fibonacci(13)).toEqual([
      1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233,
    ]);
    expect(fibonacci(15)).toEqual([
      1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610,
    ]);
  });
});
