//Find the Encrypted String
/*
Input: s = "dart", k = 3

Output: "tdar"
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
    let n = s.length;
    let newArr = [];

    for (let i = 0; i < n; i++) {
        newArr.push(s[(i + k) % n]);
    }

    return newArr.join("");
};

console.log(getEncryptedString("qyt", 1));

