// Write an ES6 function that takes an array of objects with name, salary, role and workExperience, and returns a new array with an incremented salary of 1000. Also add a property isSenior as true for employees who have been working for more than 3 years.
const employees = [
  { name: "Raju", salary: 1500, role: "dev", workExperience: 3 },
  { name: "Aakash", salary: 2000, role: "dev", workExperience: 3 },
  { name: "Dinesh", salary: 2000, role: "dev", workExperience: 2.5 },
  { name: "Mohan", salary: 2000, role: "dev", workExperience: 2 },
  { name: "Ramesh", salary: 3070, role: "pm", workExperience: 3 },
  { name: "Jiten", salary: 4800, role: "qa", workExperience: 3 },
];

 const incrementSalaryAndPromoteSenior = (employees) => {
  return employees.map((employee) =>
    employee.workExperience >= 3
      ? { ...employee, salary: employee.salary + 1000, isSenior: true }
      : { ...employee, salary: employee.salary + 1000 }
  );
};

console.log(incrementSalaryAndPromoteSenior(employees));
