//  create a function take a number and give its factorial

const factorial = (number) => {
  let result = 1;

  for (let i = number; i > 0; i--) {
    result = result * i;
  }

  return result;
};

console.log(factorial(10));
