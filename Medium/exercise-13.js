// Implement a function difference(array, values) that creates an array of array values not included
//  in the other given arrays using SameValueZero for equality comparisons. The order and references
//   of result values are determined by the first array.

// difference([1, 2, 3], [2, 3]);  => [1]
// difference([1, 2, 3, 4], [2, 3, 1]);  => [4]

const array1 = [1, 2, 3, 5, 5];
const array2 = [2, 3, 3];

// const difference = (arr, values) => {
//   let result = [];
//   const newValues = [...new Set(values)];
//   for (let i = 0; i < arr.length; i++) {
//     const value = arr[i];
//     if (!newValues.includes(value)) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// };

const difference = (arr, values) => {
  const newArr = [...new Set(arr)];
  const newValues = [...new Set(values)];
  return newArr.filter((value) => !newValues.includes(value));
};

console.log(difference(array1, array2));
