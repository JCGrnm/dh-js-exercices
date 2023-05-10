// CORRECTED VERSION AFTER TUTOR FEEDBACK
function printName() {
  var helloName = "Hello John";
  function inner() {
    return helloName;
  }
  return inner;
}

console.log(printName()());

// WRONG VERSION TO BE CORRECTED
//function printName(helloName) {
//   var helloName = "Hello John";
//   function inner() {
//     return helloName;
//   }
//   return inner();
// }

// console.log(printName());
