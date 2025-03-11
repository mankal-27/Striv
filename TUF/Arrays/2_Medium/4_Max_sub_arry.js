/*
    Kadane's Algorithm : Maximum Subarray Sum in an Array
    https://takeuforward.org/data-structure/kadanes-algorithm-maximum-subarray-sum-in-an-array/
*/

/**
 * Function to find the maximum subarray sum in an array
 * @param {number[]} nums the array to search
 * @returns {number} the maximum subarray sum
 */
function maxSubArray(nums) {
    // initialize max to 0
    let max = 0
    // loop through each element in the array
    for(let i = 0 ; i < nums.length ; i++){
        // loop through each subarray starting at the current element
        for (let j = i; j < nums.length; j++) {
            // calculate the sum of the subarray
            let sum = 0
            for(let k = i; k <= j; k++){
                sum += nums[k]
            }
            // update max with the maximum of sum and max
            max = Math.max(sum, max)
        }
    }
    // return the maximum subarray sum
    return max
}

let array1 = [-2,1,-3,4,-1,2,1,-5,4]

let result = maxSubArray(array1)
console.log(result)

function maxSubArray1(nums) {
    // initialize max to 0
    let max = 0
    // loop through each element in the array
    for(let i = 0 ; i < nums.length ; i++){
        // loop through each subarray starting at the current element
        let sum = 0
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]
            // update max with the maximum of sum and max
            max = Math.max(sum, max)
        }
    }
    // return the maximum subarray sum
    return max
}

let result1 = maxSubArray1(array1)
console.log(result1)

//Kadane's Algorithm

function maxSubArray2(nums) {
    // initialize max to 0
    let max = 0
    // initialize sum to 0
    let sum = 0
    // loop through each element in the array
    for(let i = 0 ; i < nums.length ; i++){
        // add the current element to the sum
        sum += nums[i]
        // update max with the maximum of sum and max
        max = Math.max(sum, max)
        // set sum to 0 if sum is negative
        if(sum < 0){
            sum = 0
        }
    }
    // return the maximum subarray sum
    return max
}

let result2 = maxSubArray2(array1)
console.log(result2)

var maxSubArray3 = function(nums) {
    let maxSum = nums[0];
    let sum = nums[0];
    for(let i=1; i< nums.length; i++){   // start with 2nd element.
        sum = Math.max(nums[i], nums[i]+sum);
        if(sum > maxSum) maxSum = sum;
    }
    return maxSum;
    
};

let result3 = maxSubArray3(array1)
console.log(result3)

/**
 * Function to find the maximum subarray sum in an array
 * @param {number[]} nums the array to search
 * @returns {number} the maximum subarray sum
 */
function maxSubArray4(nums) {
    // Initialize max to 0
    let max = 0
    // Initialize sum to 0
    let sum = 0
    // Initialize start and end indices
    let start = 0
    let end = 0
    // Initialize temp start index
    let tempStart = 0
    // loop through each element in the array
    for (let i = 0; i < nums.length; i++) {
        // add the current element to the sum
        sum += nums[i]
        // if sum is greater than max, update max and end index
        if (sum > max) {
            max = sum
            start = tempStart
            end = i
        }
        // set sum to 0 and update temp start index if sum is negative
        if (sum < 0) {
            sum = 0
            tempStart = i + 1
        }
    }
    // print the maximum subarray
    console.log(nums.slice(start, end + 1))
    // return the maximum subarray sum
    return max
}

let result4 = maxSubArray4(array1)
console.log(result4)