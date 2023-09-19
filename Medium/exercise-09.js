//  find second largest value from an array
const array = [1, 35, 34, 5, 7, 35];

// first way to do that
const secondLargestNumber = (arr) => {
  const uniqueArray = Array.from(new Set(arr));
  const sortedArray = uniqueArray.sort((a, b) => b - a);
  if (sortedArray.length > 2) {
    return sortedArray[1];
  } else {
    return -1;
  }
};

console.log(secondLargestNumber(array));

// second way to do that
const secondLargestNum = (arr) => {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

console.log(secondLargestNum(array));
