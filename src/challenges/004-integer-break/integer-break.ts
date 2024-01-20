/**
 Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.

    Return the maximum product you can get.
   

    Example 1:

    Input: n = 2
    Output: 1
    Explanation: 2 = 1 + 1, 1 × 1 = 1.
    Example 2:

    Input: n = 10
    Output: 36
    Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.

    https://leetcode.com/problems/integer-break/description/

    solution in leetcode: https://leetcode.com/problems/integer-break/solutions/4590552/343-integer-break/
 */


export const integerBreak = (n: number): number => {
    if (n <= 3) {
        return n - 1;
    }

    let result = 1;

    while (n > 4) {
        result *= 3;
        n -= 3;
    }

    return result * n;
}