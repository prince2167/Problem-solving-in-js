// Given an array of strings, use the reduce function to find the total length of all the strings combined.
const strings = ["hello", "world", "how", "are", "you"];

const totalLength = strings.reduce((acc, curr) => (acc += curr.length), 0);

console.log(totalLength);
// Given an array of objects representing students, use the reduce function to find the student name with the highest grade.

const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 70 },
  { name: "Charlie", grade: 90 },
  { name: "Dave", grade: 80 },
];

const highestGrade = students.reduce((acc, curr) =>
  acc.grade > curr.grade ? acc : curr
);

console.log(highestGrade);
