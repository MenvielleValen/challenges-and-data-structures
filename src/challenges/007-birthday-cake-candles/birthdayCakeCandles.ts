/**
    You are in charge of the cake for a child's birthday. 
    You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. 
    Count how many candles are tallest.

    https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true
 */

export const birthdayCakeCandles = (candles: number[]): number => {
  let maxHeight = 0;

  candles.forEach((x) => {
    if (x > maxHeight) {
      maxHeight = x;
    }
  });

  let candlesCount = 0;
  candles.forEach((x) => x === maxHeight && candlesCount++);

  return candlesCount;
};
