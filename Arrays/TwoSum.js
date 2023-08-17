/*
 * Two sum problem - Given an array of integers, find two numbers that add up to a specific target sum. 
 */


const getTwoSum_BRUTFORCE = (arr, sum) => {
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === sum) return [arr[i], arr[j]]
        }
    }
    return [];
}

const getTwoSum_OPTIMISED = (arr, sum) => {
    let obj = {};
    for(let i = 0; i < arr.length; i++){
        const key = sum - arr[i];
        if(obj[arr[i]]) return [key, arr[i]];
        else obj[key] = true;
    }
    return [];
}


const arr = [4, 10, 2, 0, 15, 45, 13, 14];

console.log(getTwoSum_BRUTFORCE(arr, 27)) // n^2 solution

console.log(getTwoSum_OPTIMISED(arr, 27)) // n solution