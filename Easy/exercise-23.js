const fruits = [
  "apple",
  "banana",
  "apple",
  "orange",
  "apple",
  "banana",
  "apple",
];

const totalCount = (arr) => {
  let obj = {};
  for (let key of arr) {
    if (obj[key]) {
      obj[key] += 1;
    } else {
      obj[key] = 1;
    }
  }
  return obj
};

console.log(totalCount(fruits));
