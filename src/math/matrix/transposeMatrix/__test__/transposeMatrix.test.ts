import { transposeMatrix } from "../transposeMatrix";

describe("transposeMatrix", () => {
  it("should transpose matrix", () => {
    expect(
      transposeMatrix([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toStrictEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ]);
    expect(
      transposeMatrix([
        [2, 8, 10],
        [6, 8, 15],
        [9, 14, 12],
        [6, 2, 18],
      ])
    ).toStrictEqual([
      [2, 6, 9, 6],
      [8, 8, 14, 2],
      [10, 15, 12, 18],
    ]);
    expect(
      transposeMatrix([
        [9, 10, 15, 25, 20],
        [8, 9, 10, 15, 12],
        [7, 7, 7, 2, 1],
        [-2, 4, 8, -5, 2],
      ])
    ).toStrictEqual([
      [9, 8, 7, -2],
      [10, 9, 7, 4],
      [15, 10, 7, 8],
      [25, 15, 2, -5],
      [20, 12, 1, 2],
    ]);
  });
});
