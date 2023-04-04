// Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7 without using strlen()

const lengthOfString = (str) => {
  let result;
  let strLength = 0;
  for (let i = 0; str[i] !== undefined; i++) {
    strLength++;
  }
  if (strLength > 7) {
    result = true;
  } else result = false;
  
  return result;
};

console.log(lengthOfString("prince"));
