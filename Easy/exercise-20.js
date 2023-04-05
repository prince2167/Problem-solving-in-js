//  Given an array of strings, write a function that returns the total number of characters in all the strings that start with the letter "A".

const strings = ["Apple", "Arrange", "Banana", "Cat"];

const totalCharacter = (strings) => {
  let result = "";
  for (let word of strings) {
    if (word[0] === "A") {
      result += word;
    }
  }
  return result.length;
};

console.log(totalCharacter(strings));
