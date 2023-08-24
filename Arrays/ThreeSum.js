/**
 * Three Sum Problem - Find all the triplets with the given sum
 */

const getThreeSum = (arr, target) => {
    let result = [];
    const length = arr.length;

    arr.sort((a, b) => a - b);

    for(let i = 0; i < length - 2; i++) {
        if(i === 0 || (i > 0 && arr[i] !== arr[i - 1])){
            let left = i + 1;
            let right = length - 1;
            while(left < right) {
                const sum = arr[i] + arr[left] + arr[right];
                if(sum === target) {
                    result.push([arr[i], arr[left], arr[right]])
                    while(left < right && arr[left] === arr[left + 1]) left++;
                    while(left < right && arr[right] === arr[right - 1]) right--;
                    left++;
                    right--;
                } else if(sum < target){
                    left++;
                } else {
                    right--;
                };
            }
        }
    }
    return result;
}

const nums = [-1, 0, 1, 2, -1, -4];
const target = 0;
const triplets = getThreeSum(nums, target);

console.log(triplets);