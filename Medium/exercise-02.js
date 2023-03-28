// write a function which takes a string and a letter now show the number of occurrence of the letter in the string

const letterOccurance = (str, letter) => {
  let occurance = 0;
  let char = letter.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      occurance++;
    }
  }
  return occurance;
};

console.log(letterOccurance("apple", "p"));
