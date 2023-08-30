/*
Problem Statement:
  Given an array of integers, move all the 0's to the end of the array while maintaining the relative order of the non-zero elements.

Input:
  An array of integers.

Output:
  Array with all the non zero elements leading zeroes.

Test Case:
  Input: [2, 0, 3, 0, 0, 2]
  Output: [2, 3, 2, 0, 0, 0]
*/

const moveZeroesToEnd1 = (arr) => {
    const length = arr.length;
    let pointer = 0;
    for(let i = 0; i < length; i++){
        if(arr[i] === 0 && arr[pointer] !== 0){
            pointer = i;
        }
        if(arr[i] !== 0 && arr[pointer] === 0){
            arr[pointer] = arr[i];
            arr[i] = 0;
            pointer++;
        }
    }
    return arr;
}

const moveZeroesToEnd2 = (array) => {
    let nonZeroCount = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== 0) {
        array[nonZeroCount] = array[i];
        nonZeroCount++;
      }
    }
  
    for (let i = nonZeroCount; i < array.length; i++) {
      array[i] = 0;
    }
  
    return array;
  }

console.log(moveZeroesToEnd1([2, 0, 3, 0, 0, 2]));
console.log(moveZeroesToEnd2([0, 0, 0, 1, 2, 3]))