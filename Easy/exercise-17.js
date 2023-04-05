// Create a function which takes a string and capitalize its first char

const capitalFirstString = (str) => {
  let string = str.split(" ");
  let words = string.map((word) => word[0].toUpperCase() + word.slice(1));
  let result = words.join(" ");
  return result;
};

console.log(capitalFirstString("hey this is prince"));
