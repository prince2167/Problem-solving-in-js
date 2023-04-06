// Given an array of strings, use the reduce function to find the total length of all the strings combined.

const strings = ["hello", "world", "how", "are", "you"];

const totalLength = strings.reduce((acc, curr) => (acc += curr.length), 0);

console.log(totalLength);
