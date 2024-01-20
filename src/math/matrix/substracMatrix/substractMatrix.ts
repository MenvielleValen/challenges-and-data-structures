export const substractMatrix = (a: number[][], b: number[][]): number[][] => {
  return a.map((col, r) => a[0].map((row, c) => a[r][c] - b[r][c]));
};
