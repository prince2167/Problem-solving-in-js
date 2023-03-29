// create a function which takes string and return the count of vowels in that string

const vowelsCount = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let word = str[i];
    let value = word.toLowerCase();
    if (
      value === "a" ||
      value === "e" ||
      value === "i" ||
      value === "o" ||
      value === "u"
    ) {
      count++;
    }
  }
  return count;
};

console.log(vowelsCount("prince"));
