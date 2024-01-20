/**
 * Given a string s, reverse only all the vowels in the string and return it.

    The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
  
    Example 1:

    Input: s = "hello"
    Output: "holle"
    Example 2:

    Input: s = "leetcode"
    Output: "leotcede"

    https://leetcode.com/problems/reverse-vowels-of-a-string/
    
    solution in leetcode: https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/4590376/345-reverse-vowels-of-a-string/
 * @param str 
 */

export const reverseVowels = (s: string): string => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const vowelArray: string[] = [];

    // Indentify vowels
    for (const char of s) {
        if (vowels.includes(char)) {
            vowelArray.push(char);
        }
    }

    // Revert vowelArray
    vowelArray.reverse();


    let result = '';
    let vowelIndex = 0;
    for (const char of s) {
        if (vowels.includes(char)) {
            result += vowelArray[vowelIndex];
            vowelIndex++;
        } else {
            result += char;
        }
    }

    return result;
};
