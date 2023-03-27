const fruits = ["apple", "mango", "grapes", "guava", "pineapple"];

const lastElementOfArray = (fruits) => {
  let lastElement = 0;
  for (let i = 0; i < fruits.length; i++) {
    lastElement = fruits[i];
  }
  return lastElement;
};

console.log(lastElementOfArray(fruits));
