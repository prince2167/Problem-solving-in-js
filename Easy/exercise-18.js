// Create a function which takes a number and returns sum of multiple of 3 and 5

const multiple = (number) => {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};

console.log(multiple(5));
