/**
Problem Statement:
  Product of Array Except Self:
  Given an array nums, return an array where each element output[i] is the product of all the elements of nums except nums[i].

  Input: nums = [1, 2, 3, 4]
 
  Output: [24, 12, 8, 6]
*/

const productExceptSelf = (arr) => {
    const arrLength = arr.length;
    const result = new Array(arrLength);

    const leftProduct = new Array(arrLength);
    const rightProduct = new Array(arrLength);

    leftProduct[0] = 1;
    rightProduct[arrLength - 1] = 1;
    
    for(let i = 1; i < arrLength; i++) {
        leftProduct[i] = leftProduct[i - 1] * arr[i - 1];
    }

    for(let i = arrLength - 2; i >= 0; i--) {
        rightProduct[i] = rightProduct[i + 1] * arr[i + 1];
    }
    
    for(let i = 0; i < arrLength; i++) {
        result[i] = leftProduct[i] * rightProduct[i];
    }

    return result;
}

console.log(productExceptSelf([1,2,3,4]))