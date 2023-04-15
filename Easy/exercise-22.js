// Given an array of numbers, write a function that returns the sum of the cubes of all odd numbers in the array.

const numbers = [1, 2, 3, 4, 5];

const totalofNumers = (numbers) => {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (!numbers[i] % 2 === 0) {
      total += numbers[i] * numbers[i] * numbers[i];
    }
  }
  return total;
};

console.log(totalofNumers(numbers));
