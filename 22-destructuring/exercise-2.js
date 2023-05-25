const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// provided by the assignment
// const id = person.id;
// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;

//one code line solution:
const { id, firstName, lastName, age } = person;
console.log(id, firstName, lastName, age);
