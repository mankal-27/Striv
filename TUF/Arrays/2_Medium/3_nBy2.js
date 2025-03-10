/*
Find the Majority Element that occurs more than N/2 times in an array of size N.
https://takeuforward.org/data-structure/find-the-majority-element-that-occurs-more-than-n-2-times/
 */

function majorityElement(nums) {
    let n = nums.length;
    for(let i = 0 ; i < n; i++){
        let count = 0;
        for(let j = 0; j < n; j++){
            if(nums[i] === nums[j]){
                count++;
            }
        }
        if(count > n/2){
            return nums[i]
        }
    }
    return -1
}

let array1 = [2,2,1,1,1,2,2]
let array2 = [3,2,3]
let array3 = [4,4,2,4,3,4,4,3,2,4]
let result = majorityElement(array1)
let result2 = majorityElement(array2)
let result3 = majorityElement(array3)
console.log(result)
console.log(result2)
console.log(result3)

//use hashmap
function majorityElement2(nums) {
    //use hash mapping
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) > nums.length / 2) {
            return nums[i];
        }
    }
    return -1;
}

let result4 = majorityElement2(array1)
let result5 = majorityElement2(array2)
let result6 = majorityElement2(array3)
console.log(result4)
console.log(result5)
console.log(result6)

//Moores Voting Algorithm
function majorityElement3(nums) {
    let count = 0;
    let candidate = null;
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
        }
        if (nums[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
}

let result7 = majorityElement3(array1)
let result8 = majorityElement3(array2)
let result9 = majorityElement3(array3)
console.log(result7)
console.log(result8)
console.log(result9)