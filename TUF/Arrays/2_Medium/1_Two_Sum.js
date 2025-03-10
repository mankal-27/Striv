/*
    Two Sum : Check if a pair with given sum exists in Array
    
    1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.

    2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.

*/

function twoSum(arr, target) {
    for(let i = 0 ; i < arr.length; i++){
        for(let j = i + 1 ; j < arr.length ; j++){
            if((arr[i] + arr[j]) === target){
                return "Yes"
            }
        }
    }
    return "No"
}

let array1 = [2,3,4,5,6]
let target = 10

let result = twoSum(array1, target)
console.log(result)

function twoSum2(arr, target) {
    const hashMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if(hashMap.has(complement)){
            return "Yes"
        }
        hashMap.set(arr[i], i);
    }
    return "No"
}

let result2 = twoSum2(array1, target)
console.log(result2)

function twoSum3(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if(arr[left] + arr[right] === target){
            return [left, right]
        } else if(arr[left] + arr[right] < target){
            left++;
        } else {
            right--;
        }
    }
    return [-1, -1]
}

let result3 = twoSum3(array1, target)
console.log(result3)