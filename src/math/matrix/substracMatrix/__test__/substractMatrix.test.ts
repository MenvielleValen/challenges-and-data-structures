import { substractMatrix } from "../substractMatrix";

describe("substractMatrix", () => {
  it("should substract two matrices", () => {
    expect(
      substractMatrix(
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
        substractMatrix(
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
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);


    expect(
        substractMatrix(
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
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);

    expect(
        substractMatrix(
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
      [-3, -2, 11],
      [11, 7, 7],
      [1, -12, -2],
    ]);

    expect(
        substractMatrix(
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
      [3, 9, -8],
      [-3, 5,-20],
      [-4, 1, -1],
      [-15, -1, -5],
    ]);
  });
});
