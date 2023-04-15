// Write an ES6 function that takes an array of objects with name, role and array of hours which represents the time a person spends on the server each day. Give the tag of regular to students who are active in the community and spends more than 20 hours a week
const neogCommunity = [
  { name: "Raju", role: "student", hours: [1, 2, 3, 1, 2, 3, 0] },
  { name: "Aakash", role: "mentor", hours: [1, 2, 3, 4, 5, 6, 7] },
  { name: "Ramesh", role: "student", hours: [4, 5, 6, 4, 5, 6, 0] },
  { name: "Jiten", role: "TA", hours: [2, 2, 3, 5, 2, 3, 0] },
  { name: "Harsh", role: "student", hours: [7, 8, 9, 7, 8, 9, 0] },
  { name: "Akshay", role: "student", hours: [1, 3, 5, 7, 9, 0, 2] },
  { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] },
  { name: "Mohan", role: "student", hours: [4, 6, 8, 0, 1, 9, 2] },
];

const tagRegularStudents = (arr) => {
  const activePerson = arr.map((person) => {
    const totalHours = person.hours.reduce((acc, curr) => acc + curr);
    if (person.role === "student" && totalHours > 20) {
      return { ...person, tag: "regular" };
    } else {
      return person;
    }
  });

  return activePerson;
};

console.log(tagRegularStudents(neogCommunity));
