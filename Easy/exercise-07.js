// Given array of numbers,  create a function that returns the sum of positive numbers

const numbers = [-4, 3, -7, 6, 8];

const sumOfPositiveNumber = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (0 < arr[i]) {
      sum += arr[i];
    }
  }

  return sum;
};

console.log(sumOfPositiveNumber(numbers));
