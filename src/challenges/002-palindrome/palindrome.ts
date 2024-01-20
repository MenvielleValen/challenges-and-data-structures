/**
 * Palindrome
 *      input = Never odd or even
 *      ouput = True
 */

export const palindrome = (str: string) => {
    const normalizedString = str.trim().replace(/\s/g, '').toLowerCase();

    for (let i = 0; i < normalizedString.length / 2; i++) {
        if (normalizedString[i] !== normalizedString[normalizedString.length - 1 - i]) {
            return false;
        }
    }

    return true;
}
