// create a function which takes a sentence as a parameter, and returns the longest word  in the sentence

const longestWord = (string) => {
  let str = string.split(" ");
  let longest = 0;
  let word = null;
  for (let i = 0; i < str.length - 1; i++) {
    if (longest < str[i].length) {
      longest = str[i].length;
      word = str[i];
    }
  }
  return word;
};

console.log(longestWord("Hi this prince"));
