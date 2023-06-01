function printAsyncName(printHello, name) {
  setInterval(() => {
    printHello("Hello");
  }, 1000);
  setInterval(() => {
    console.log(`${name}!!!`);
  }, 2000);
}

function printHello(x) {
  console.log(x);
}
printAsyncName(printHello, "Geronimooooooo");

// CON SET-TIMEOUT
// function printAsyncName(printHello, name) {
//   setTimeout(() => {
//     printHello();
//     setTimeout(() => console.log(`${name}!!!`), 2000);
//   }, 1000);
// }

// const printHello = () => console.log("Hello");
// printAsyncName(printHello, "Geronimooooo");
