// A program that reads two numbers and prints the longest and smallest one

const findSmallestAndLongest = (num1, num2) => {
  let longest = 0;
  let smallest = 0;
  if (num1 < num2) {
    longest = `longest: ${num2}`;
    smallest = `smallest: ${num1}`;
  }

  return [longest, smallest];
};

console.log(findSmallestAndLongest(5, 10));
