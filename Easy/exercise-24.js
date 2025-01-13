// Given an array of integers numbers, determine whether the array contains any duplicate values.
// A duplicate is defined as any number that appears more than once in the array.

const numbers = [1, 2, 3, 4, , 4, 1];
// export default function findDuplicates(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i+1; j < numbers.length; j++) {
//       if (numbers[i] === numbers[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

export default function findDuplicates(numbers) {
  const arr = numbers.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (numbers[i] === numbers[i + 1]) {
      return true;
    }
  }
  return false;
}

const result = findDuplicates(numbers);
console.log(result);
