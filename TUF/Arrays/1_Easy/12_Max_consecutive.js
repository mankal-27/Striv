/*
Max Consecutive Ones
Given a binary array nums, return the maximum number of consecutive 1's in the array.
https://leetcode.com/problems/max-consecutive-ones/description/
 */

var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let max = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            count++;
            max = Math.max(max, count);
        } else {
            count = 0;
        }
    }
    return max
};

let array1 = [1,1,0,1,1,1]
let result = findMaxConsecutiveOnes(array1)
console.log(result)