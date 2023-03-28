// write  function that takes any numbers of arguments of type number and returns the sum of all arguments
const sumOfArguments = (...args) => {
  let sum = 0;

  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }

  return sum;
};

console.log(sumOfArguments(2, 3, 4, 5));
