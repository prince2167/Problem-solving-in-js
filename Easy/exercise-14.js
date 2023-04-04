// Write a program that takes two strings and copies smaller string into bigger string

const stringCopy = (str1, str2) => {
  let length1 = str1.length;
  let length2 = str2.length;
  let result = "";
  if (length1 > length2) result = str1 + str2;
  else result = str2 + str1;
  return result;
};

console.log(stringCopy("khati", "lokesh"));
