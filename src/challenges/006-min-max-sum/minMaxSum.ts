/**
    Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
    Then print the respective minimum and maximum values as a single line of two space-separated long integers.

    https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
 */


export const minMaxSum = (arr: number[]): number[] => {

    const sort = arr.sort();
    const minNumbers = [];
    const maxNumbers = [];

    for(let i = 0; i < 4; i++){
        minNumbers.push(sort[i])
    }

    for(let i = 0; i < 4; i++){
        maxNumbers.push(sort[sort.length -1 - i])
    }

    return [minNumbers.reduce((x, y) => x + y), maxNumbers.reduce((x, y) => x + y)]
}
