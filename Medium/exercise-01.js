// write a function which takes a string, change the letter of string to uppercase which is at even indices  else to lowercase

const changeToUppercase = (str) => {
  let word = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      word += str[i].toUpperCase();
    } else {
      word += str[i].toLowerCase();
    }
  }

  return word;
};

console.log(changeToUppercase("prince"));
