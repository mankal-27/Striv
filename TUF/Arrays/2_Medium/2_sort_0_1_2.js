/*
    Sort an array of 0s, 1s and 2s
    
 */

function sort012(nums) {
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;
    for (let i = 0 ; i < nums.length; i++) {
        if (nums[i] === 0) {
            count0++;
        } else if (nums[i] === 1) {
            count1++;
        } else {
            count2++;
        }
    }
    for (let i = 0; i < count0; i++) {
        nums[i] = 0;
    }
    for (let i = count0; i < count0 + count1; i++) {
        nums[i] = 1;
    }
    for (let i = count0 + count1; i < count0 + count1 + count2; i++) {
        nums[i] = 2;
    }
    return nums;
}

let array1 = [0,2,1,2,2,1,1,1,1,0,0,0,0,2,2,2,2,0,1,0]

let result = sort012(array1)
console.log(result)

//Dutch National Flag Algorithm

function sort2(arr) {
    //apply dutch national flag algorithm
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;
    while(mid <= high){
        if(arr[mid] === 0){
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if(arr[mid] === 1){
            mid++;
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
    return arr
}

let result2 = sort2(array1)
console.log(result2)