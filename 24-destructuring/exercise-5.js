const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// Non sono sicura di aver capito bene la consegna:
// "Try fixing the code without changing any of the object properties in the constant { id, name, surname, old }."
// Soluzione mia: ho rinominato le proprietà

const { id, firstName: name, lastName: surname, age: old } = person;
console.log(id, name, surname, old);
