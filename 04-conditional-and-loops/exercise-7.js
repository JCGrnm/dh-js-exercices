function sumUntil(maxValue) {
  let sum = 0;
  for (let i = 1; i <= maxValue; i++) {
    sum += i;
  }
  return sum;
}

// con la formula di progressione aritmetica
// function sumUntil(maxValue) {
//   return (maxValue * (maxValue + 1)) / 2;
// }

console.log(sumUntil(5));
