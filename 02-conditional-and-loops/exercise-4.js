const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

const nicknames = nicknameMap(persons);

function nicknameMap(persons) {
  let nicknames = [];
  for (i of persons) {
    nicknames.push(i.name + "-" + i.age);
  }
  return nicknames;
}

// oppure con forEach
// function nicknameMap(persons) {
//   let nicknames = [];
//   persons.forEach((i) => {
//     nicknames.push(i.name + "-" + i.age);
//   });
//   return nicknames;
// }

console.log(persons);
console.log(nicknames);
