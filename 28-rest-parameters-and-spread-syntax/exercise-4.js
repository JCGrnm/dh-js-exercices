// provided by assignment:
// function sum(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
} // rest

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // spread
