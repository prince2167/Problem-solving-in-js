// remove duplicates from array
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]; // output [0,1,2,3,4] length = 5

const removeDuplicates = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }

  return nums.length;
};

console.log(removeDuplicates(nums));

// second way to do that

const removeDuplicate = (nums) => {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
console.log(removeDuplicate(nums));
