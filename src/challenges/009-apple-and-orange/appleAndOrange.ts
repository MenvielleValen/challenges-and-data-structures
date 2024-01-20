/**
    Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, 
    determine the number of apples and oranges that land on Sam's house.

    In the diagram below:

    The red region denotes the house, where  is the start point, and  is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
    Assume the trees are located on a single point, where the apple tree is at point , and the orange tree is at point .
    When a fruit falls from its tree, it lands  units of distance from its tree of origin along the -axis. 
    *A negative value of  means the fruit fell  units to the tree's left, and a positive value of  means it falls  units to the tree's right. *

     https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true
 */



/**
 * @param s house init x
 * @param t house finish x
 * @param a tree apples position x
 * @param b tree oranges position x
 * @param apples shot distances apples 
 * @param oranges shot distances oranges
 * @returns number of apples and oranges that fell on the house
 */
export function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): {applesCount: number, orangeCount: number} {
    const applesDistance: number[] = [];
    const orangesDistance: number[] = [];

    apples.forEach(aDistance => {
        applesDistance.push(a + aDistance);
    })

    oranges.forEach(oDistance => {
        orangesDistance.push(b + oDistance);
    })

    const applesCount = applesDistance.filter((d) => d >= s && d <= t).length;
    const orangeCount = orangesDistance.filter((d) => d >= s && d <= t).length;

    return {
        applesCount,
        orangeCount
    }
}
