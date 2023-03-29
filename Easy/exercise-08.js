// create a function that removes the first and last character of the string

const removeString = (str) => {
  const word = str.slice(1, str.length - 1);

  return word;
};

console.log(removeString("prince"));
