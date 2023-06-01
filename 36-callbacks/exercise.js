function repeatHello(func) {
  const repeatFunction = setInterval(func, 1000);
  setTimeout(() => {
    clearInterval(repeatFunction);
  }, 5000);
}

const printHello = () => console.log("Hello!");

repeatHello(printHello);

//The callback function must be an arrow function, can you also explain why?
//  - simple and short syntax
//  - no binding of "this", "this" value inside an arrow function is determined by the LEXICAL SCOPE
