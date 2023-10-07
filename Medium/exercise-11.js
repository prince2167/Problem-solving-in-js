// var maximumDifference = function(nums) {
//     var min=Infinity
//     var diff=-1
//     for(i=0;i<nums.length;i++){
//         min = Math.min(min,nums[i])
//         diff=Math.max(diff,nums[i]-min)
//     }
//     return diff==0 ? -1 : diff
//  };

//  console.log(maximumDifference([1,4,5,9]));

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 3, 2];

const intersection = (nums1, nums2) => {
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        result.push(nums2[j]);
      }
    }
  }
  return  Array.from( new Set(result));
};

console.log(intersection(nums1, nums2));
