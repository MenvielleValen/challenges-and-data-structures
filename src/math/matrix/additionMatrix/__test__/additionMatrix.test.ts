import { additionMatrix } from "../additionMatrix";

describe("additionMatrix", () => {
  it("should addition two matrices", () => {
    expect(
      additionMatrix(
        [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ]
      )
    ).toStrictEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);

    expect(
        additionMatrix(
          [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
          ],
          [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
          ]
        )
      ).toStrictEqual([
        [2, 0, 0],
        [0, 2, 0],
        [0, 0, 2],
      ]);


    expect(
      additionMatrix(
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ]
      )
    ).toStrictEqual([
      [2, 4, 6],
      [8, 10, 12],
      [14, 16, 18],
    ]);

    expect(
      additionMatrix(
        [
          [-1, 3, 8],
          [10, 15, 12],
          [3, -3, 7],
        ],
        [
          [2, 5, -3],
          [-1, 8, 5],
          [2, 9, 9],
        ]
      )
    ).toStrictEqual([
      [1, 8, 5],
      [9, 23, 17],
      [5, 6, 16],
    ]);

    expect(
      additionMatrix(
        [
          [5, 8, 2],
          [5, 10, -10],
          [1, 4, 8],
          [-8, 2, 3],
        ],
        [
          [2, -1, 10],
          [8, 5, 10],
          [5, 3, 9],
          [7, 3, 8],
        ]
      )
    ).toStrictEqual([
      [7, 7, 12],
      [13, 15, 0],
      [6, 7, 17],
      [-1, 5, 11],
    ]);
  });
});
