class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const developer = new Person("Mario", "Rossi");
//provided by assignment: console.log(developer.firstName + " " + developer.lastName);

// solution - refactor template liberals:
console.log(`${developer.firstName} ${developer.lastName}`);
