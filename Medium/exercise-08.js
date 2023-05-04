// Given an array of integers nums and an integer target,
//  return indices of the two numbers such that they add up to target.

const twoSum = function(nums, target) {
    for (let index = 0; index < nums.length; index++) {
       const diff = target - nums[index];
       const diffIndex = nums.indexOf(diff);
       if (diffIndex !== -1 && diffIndex !== index) {
           return [index, diffIndex];
       }
   }
};
nums = [3,2,4], target = 6
const result = twoSum(nums,target)
console.log(result)