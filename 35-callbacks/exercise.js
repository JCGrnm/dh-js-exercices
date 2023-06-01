function repeatHello(printHello) {
  setInterval(() => {
    printHello("Hello!");
  }, 1000);
}

repeatHello(() => console.log("Hello!"));

// alternativa ///////////////
// function repeatHello(func) {
//   setInterval(func, 1000);
// }
// const printHello = () => console.log("Hello!");
// repeatHello(printHello);

//The callback function must be an arrow function, can you also explain why?
//  - simple and short syntax
//  - no binding of "this", "this" value inside an arrow function is determined by the LEXICAL SCOPE
