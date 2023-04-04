// Create a function which takes a string and capitalize its first char

const capitalFirstChar = (str) => {
  let string = "";
  string = str[0].toUpperCase() + str.slice(1);

  return string;
};

console.log(capitalFirstChar("prince"));
