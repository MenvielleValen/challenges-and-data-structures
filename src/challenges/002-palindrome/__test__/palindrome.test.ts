import { palindrome } from "../palindrome";

describe("palindrome", () => {
  test("should return if is palindrome", () => {
    let input = "ada";
    expect(palindrome(input)).toBeTruthy();

    input = "water";
    expect(palindrome(input)).toBeFalsy();

    input = "Never odd or even";
    expect(palindrome(input)).toBeTruthy();

    input = "Race car";
    expect(palindrome(input)).toBeTruthy();

    input = "Palindrome";
    expect(palindrome(input)).toBeFalsy();
  });
});
