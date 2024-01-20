/**
 * Given an integer n, return true if it is a power of four. Otherwise, return false.

    An integer n is a power of four, if there exists an integer x such that n == 4x.


    Example 1:

    Input: n = 16
    Output: true
    Example 2:

    Input: n = 5
    Output: false
    Example 3:

    Input: n = 1
    Output: true

    Follow up: Could you solve it without loops/recursion?

    https://leetcode.com/problems/power-of-four/description/

    solution in leetcode: https://leetcode.com/problems/power-of-four/solutions/4590779/342-power-of-four/
    
 */

export const isPowerOfFour = (n: number) => {
  /**
   * n = 4^x
   * 4^x = n
   * log(4^x) = log(n)
   * x * log(4) = log(n)
   * x = log(4) / log(n)
   * => x = Math.log(n) / Math.log(4);
   */

  const x = Math.log(n) / Math.log(4);
  return x % 1 === 0;
};
