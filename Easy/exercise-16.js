// Find longest word in a string

const longestString = (str) => {
  let string = str.split(" ");

  let longest = string[0];
  for (let i = 1; i < string.length; i++) {
    if (longest.length < string[i].length) {
      longest = string[i];
    }
  }
  return longest;
};

console.log(longestString("The quick brown fox jumped over the lazy dog"));
