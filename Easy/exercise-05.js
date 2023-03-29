// numbers of array return smallest number

const numbers = [10, 4, 2, 9, 5];
const smallestNumber = (arr) => {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (smallest > arr[i]) {
      smallest = arr[i];
    }
  }

  return smallest;
};

console.log(smallestNumber(numbers));
