//  write a program to delete all vowels from a string

const removeVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let value = str[i].toLowerCase();
    if (!vowels.includes(value)) {
      result += str[i];
    }
  }
  return result;
};

console.log(removeVowels("prince"));
