/*
Problem Statement:
  Given an array of integers, find the contiguous subarray with the largest sum.

Input:
  An array of integers.

Output:
  The sum of the largest contiguous subarray.

Test Case:
  Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
  Output: 6
  Explanation: The subarray [4, -1, 2, 1] has the largest sum of 6.
*/

const getMaxSubArraySum_BruteForce = (arr) => { // n^2
    let MAX_SUM = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < arr.length; i++){
        let sum = 0;
        for(let j = i; j < arr.length; j++){
            sum = arr[j] + sum;
            if(MAX_SUM < sum) MAX_SUM = sum;
        }    
    }
    return MAX_SUM;
}

const getMaxSubArraySum_Optimised = (arr) => { // n
    let MAX_SUM = Number.MIN_SAFE_INTEGER;
    let currentSum = 0;
    let pointer1 = 0;
    
    while (pointer1 < arr.length) {
        currentSum = Math.max(arr[pointer1], currentSum + arr[pointer1]);
        MAX_SUM = Math.max(MAX_SUM, currentSum);
        
        pointer1++;
    }
    
    return MAX_SUM;
}

console.log(getMaxSubArraySum_BruteForce([-2, -1, -3, -4, -1, -2, -1, -5, 4])) // 4
console.log(getMaxSubArraySum_BruteForce([1, 2, 3, -2, 5])) // 9
console.log(getMaxSubArraySum_BruteForce([-1, -2, -3, -4])) // -1
console.log(getMaxSubArraySum_BruteForce([5, -3, 4, -1, 2, 6])) // 13
console.log(getMaxSubArraySum_BruteForce([1, -1, 1, 1, -1, 1, 1, -1])) // 3


console.log(getMaxSubArraySum_Optimised([-2, -1, -3, -4, -1, -2, -1, -5, 4])) // 4
console.log(getMaxSubArraySum_Optimised([1, 2, 3, -2, 5])) // 9
console.log(getMaxSubArraySum_Optimised([-1, -2, -3, -4])) // -1
console.log(getMaxSubArraySum_Optimised([5, -3, 4, -1, 2, 6])) // 13
console.log(getMaxSubArraySum_Optimised([1, -1, 1, 1, -1, 1, 1, -1])) // 3