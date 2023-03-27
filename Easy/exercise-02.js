// 2 .write a function that takes an array and return length of the array   without inbuilt method (array.length )

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const findLengthOfArray = (arr) => {
  let length = 0;
  for (let i = 0; arr[i] !== undefined; i++) {
    length++;
  }

  return length;
};

console.log(findLengthOfArray(numbers));
