/*
Longest Subarray with given Sum K(Positives)
https://takeuforward.org/data-structure/longest-subarray-with-given-sum-k/

Example 1:
Input Format: N = 3, k = 5, array[] = {2,3,5}
Result: 2
Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.
*/

function longestSubarray(arr, k) {
    let sum = 0;
    let maxLength = 0;
    let start = 0;
    for(let end = 0; end < arr.length; end++){
        sum += arr[end];
        while(sum > k){
            sum -= arr[start];
            start++;
        }
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
}

let array1 = [2,3,5]
let result = longestSubarray(array1, 5)
console.log(result)

