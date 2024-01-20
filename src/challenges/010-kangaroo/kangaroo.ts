/**
 * You are choreographing a circus show with various animals.
 * For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).
 *
 * You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.
 *
 * https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true
 */

/**
 *
 * @param x1 kangaroo 1 start position
 * @param v1 kangaroo 1 jump distance
 * @param x2 kangaroo 2 start position
 * @param v2 kangaroo 2 jump distance
 * @returns both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.
 */
export function kangaroo(
  x1: number,
  v1: number,
  x2: number,
  v2: number
): string {

  /**
   * Solution:
   * p(t)1 = x1 + v1 * t
   * p(t)2 = x2 + v2 * t
   * p(t)1 = p(t)2
   * x1 + v1 * t = x2 + v2 * t
   * t = (v2 - v1) / (x1 - x2)
   */

  const t = (x2 - x1) / (v1 - v2);
  return t % 1 === 0 && t > 0 ? "YES" : "NO";
}
