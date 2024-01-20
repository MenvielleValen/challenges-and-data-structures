import {
  reverseStringFromReverseMethod,
  reverseStringWithoutReverseMethod,
} from "../reverseString";

describe("reverseString", () => {
  it("should reverse array string", () => {
    const input = ["h", "e", "l", "l", "o"];
    expect(reverseStringFromReverseMethod(input)).toStrictEqual([
      "o",
      "l",
      "l",
      "e",
      "h",
    ]);

    const input2 = ["a", "n", "i", "m", "a", "l", "s"];
    expect(reverseStringWithoutReverseMethod(input2)).toStrictEqual([
      "s",
      "l",
      "a",
      "m",
      "i",
      "n",
      "a",
    ]);

    const input3 = ["a", "r", "g", "e", "n", "t", "i", "n", "a"];
    expect(reverseStringFromReverseMethod(input3)).toStrictEqual([
      "a",
      "n",
      "i",
      "t",
      "n",
      "e",
      "g",
      "r",
      "a",
    ]);

    const input4 = ["s", "o", "f", "t", "w", "a", "r", "e"];
    expect(reverseStringWithoutReverseMethod(input4)).toStrictEqual([
      "e",
      "r",
      "a",
      "w",
      "t",
      "f",
      "o",
      "s",
    ]);
  });
});
