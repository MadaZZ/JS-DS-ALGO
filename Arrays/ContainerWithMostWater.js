/** 
Problem Description:
   You are given an array of non-negative integers where each element represents the height of a vertical line. You need to find two lines that together with the x-axis form a container, such that the container contains the most water.
    
Input:
    An array of non-negative integers representing the heights of vertical lines.
Output:
    An integer representing the maximum amount of water that can be contained by the selected container.
Example:
    Input: [1, 8, 6, 2, 5, 4, 8, 3, 7]
    Output: 49
*/

const getMaxWaterLevel_BruteForce = (arr) => {
    let maxWaterLevel = 0;
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i; j < arr.length; j++){
            const waterLevel = Math.min(arr[i], arr[j]) * (j - i);
            if(maxWaterLevel < waterLevel) maxWaterLevel = waterLevel; 
        }
    }
    return maxWaterLevel;
}

const getMaxWaterLevel_Optimised = (arr) => {
    let maxWaterLevel = 0;
    let leftPointer = 0;
    let rightPointer = arr.length - 1;

    while(leftPointer < rightPointer) {
        const waterLevel = Math.min(arr[leftPointer], arr[rightPointer]) * (rightPointer - leftPointer);
        if(maxWaterLevel < waterLevel) maxWaterLevel = waterLevel;

        if(arr[leftPointer] < arr[rightPointer]){
            leftPointer++;
        } else {
            rightPointer--;
        }
    }

    return maxWaterLevel;
}

const arr1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // 49
const arr2 = [4, 3, 2, 1, 4]; // 16

console.log(getMaxWaterLevel_BruteForce(arr1)); //n^2
console.log(getMaxWaterLevel_BruteForce(arr2)); //n^2

console.log(getMaxWaterLevel_Optimised(arr1)); // n
console.log(getMaxWaterLevel_Optimised(arr2)); // n