// Write a function that takes a string and a character as input and determines if the string contains the character (both lowercase and uppercase).
// For eg: if user has entered "lokesh" and "o", you've to check if "lokesh" includes "o" or "O". and same would be the case if user enters "lokesh" and "O"
// Try to do it without .includes

const stringChecker = (str, char) => {
  for (let i = 0; i < str.length; i++) {
    str.charAt[i] = char.toLowerCase();
    return console.log("includes");
  }
};

stringChecker("lokesh", "O");
