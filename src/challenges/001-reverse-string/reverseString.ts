/**
 * Reverse string array:
 *      input = ["h","e","l","l","o"]
 *      output = ["o", "l", "l", "e", "h"]
 * 
 *  Write a function that reverses a string. The input string is given as an array of characters s.
 *  You must do this by modifying the input array in-place with O(1) extra memory.
 * 
 *  https://leetcode.com/problems/reverse-string/ 
 * 
 *  solution in leetcode: https://leetcode.com/problems/reverse-string/solutions/4590388/344-reverse-string/
 */


/**
 * Solution using Array.reverse() method
 * @param str 
 * @returns 
 */
export const reverseStringFromReverseMethod = (str: string[]): string[] => {
    return str.reverse();
}

/**
 * Solution without using Array.reverse() method
 * @param str 
 */
export const reverseStringWithoutReverseMethod = (str: string[]): string[] => {

    let i = 0;
    let j = str.length - 1;

    while(i <= j){

        const temp = str[i]
        str[i] = str[j];
        str[j] = temp; 

        i++;
        j--;
    }

    return str;
}

