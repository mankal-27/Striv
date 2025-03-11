/*
    Find the number that appears once, and the other numbers twice
    https://takeuforward.org/arrays/find-the-number-that-appears-once-and-the-other-numbers-twice/
    Example 1:
    Input Format:
     arr[] = {2,2,1}
    Result:
     1
    Explanation:
     In this array, only the element 1 appear once and so it is the answer.
 */

function findUnique(nums) {
    let xor = 0;
    for(let i = 0; i < nums.length; i++){
        xor = xor ^ nums[i];
    }
    return xor;
}

let array1 = [2,2,1]
let result = findUnique(array1)
console.log(result)

var singleNumber = function(nums) {
    const n = nums.length;
    
    //declare the hashmap
    const hashMap = new Map();
    for(let i = 0; i < n; i++){
        const num = nums[i];
        hashMap.set(num, (hashMap.get(num) || 0) + 1)
    }
    
    for(const [num, count] of hashMap){
        if(count === 1){
            return num;
        }
    }
    return -1
};