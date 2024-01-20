import { reverseVowels } from "../reverseVowels";

describe("reverseVowels", () => {
  test("should reverse vowels", () => {
    let input = "hello";
    expect(reverseVowels(input)).toStrictEqual("holle");

    input = "leetcode";
    expect(reverseVowels(input)).toStrictEqual("leotcede");

    input = "home";
    expect(reverseVowels(input)).toStrictEqual("hemo");

    input = "car";
    expect(reverseVowels(input)).toStrictEqual("car");

    input = "race car";
    expect(reverseVowels(input)).toStrictEqual("race car");

    input = "RaCe Car";
    expect(reverseVowels(input)).toStrictEqual("RaCe Car");

    input = "aeiou";
    expect(reverseVowels(input)).toStrictEqual("uoiea");
  });
});
