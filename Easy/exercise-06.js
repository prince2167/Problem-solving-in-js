// given array of numbers return average

const numbers = [3, 4, 6, 8];

const totalAverage = (arr) => {
  let average = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  average = sum / arr.length;
  return average;
  s;
};
console.log(totalAverage(numbers));
