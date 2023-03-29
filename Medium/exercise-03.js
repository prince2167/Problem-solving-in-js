// create a function which takes a sentence as a parameter, and returns the longest word  in the sentence

const longestWord = (str) => {
  let word = str.split(" ");
  let longestWord = [];
  for (let i = 0; i < word.length; i++) {
    if (longestWord.length[i] < word[i].length) {
      longestWord.push(word[i]);
    } else null;
  }
  return longestWord;
};

console.log(longestWord("Hi this prince"));
