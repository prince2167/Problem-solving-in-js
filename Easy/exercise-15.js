// create a function which takes arr and a property name, and returns a new array with value of property
let input = [
  { name: "John", age: 21, city: "New York" },
  { name: "Mike", age: 28, city: "Moscow" },
  { name: "Danny", age: 30, city: "London" },
  { name: "Lisa", age: 26, city: "Paris" },
  { name: "Sophie", age: 19, city: "Berlin" },
];

const keyValue = (arr, property) => {
  let value = [];
  for (let i = 0; i < arr.length; i++) {
    value.push(arr[i][property]);
  }
  return value;
};

console.log(keyValue(input, "age"));
