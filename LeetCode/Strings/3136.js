/*
A word is considered valid if:

It contains a minimum of 3 characters.
It contains only digits (0-9), and English letters (uppercase and lowercase).
It includes at least one vowel.
It includes at least one consonant.

You are given a string word.

Return true if word is valid, otherwise, return false.

Notes:

'a', 'e', 'i', 'o', 'u', and their uppercases are vowels.
A consonant is an English letter that is not a vowel.
*/

/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if(word.length < 3) return false;

    const vowels = 'aeiouAEIOU';
    const digits = '0123456789';
    let countVowels = 0;
    let countConsonants = 0;    


    for(let i = 0; i < word.length; i++) {
        const char = word[i];
        if(vowels.includes(char)){
            countVowels++;
        }else if(digits.includes(char)){
            continue;
        }else if(/[a-zA-Z]/.test(char)){
            countConsonants++;
        }else{
            return false;
        }
    }

    return countVowels > 0 && countConsonants > 0;
};