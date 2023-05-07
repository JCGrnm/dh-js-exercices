const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Faster with method Object.entries
console.log(Object.entries(person));

/*Print values of person using Object.keys
Object.keys + method Array.prototype.forEach */

Object.keys(person).forEach(key => {
  console.log("[" + key + ", " + person[key] + "]");
});

