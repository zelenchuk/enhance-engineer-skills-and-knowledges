/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  let i = 0;
  let j = 1;

  while (nums.length !== j) {
    if (nums.length >= (j - 1)) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
    i++;
    j++;
  }
};


//const nums = [2,7,11,15];
//const targetNumber = 9;

//const nums = [3,2,4];
//const targetNumber = 6;

const nums = [3,3]
const targetNumber = 6;

console.log(twoSum(nums, targetNumber));
