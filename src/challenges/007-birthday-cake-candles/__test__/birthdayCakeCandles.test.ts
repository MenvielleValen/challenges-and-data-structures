import { birthdayCakeCandles } from "../birthdayCakeCandles";

describe("birthdayCakeCandles", () => {
  it("should decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles", () => {
    expect(birthdayCakeCandles([1, 5, 3, 4, 5])).toStrictEqual(2);
    expect(birthdayCakeCandles([2, 8, 8, 8, 1])).toStrictEqual(3);
    expect(birthdayCakeCandles([3, 1, 3, 3, 3])).toStrictEqual(4);
    expect(birthdayCakeCandles([5, 5, 1, 1, 2])).toStrictEqual(2);
    expect(birthdayCakeCandles([7, 5, 7, 4, 7])).toStrictEqual(3);
    expect(birthdayCakeCandles([2, 5, 1, 5, 5])).toStrictEqual(3);
  });
});
