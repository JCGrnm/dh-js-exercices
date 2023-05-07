function printName(helloName) {
  var helloName = "Hello John";
  function inner() {
    //sintax directly from the documentation
    setTimeout(() => {
      console.log(helloName);
    }, 1000);
  }
  return inner;
}
printName()();

/* -----------ALTERNATIVE---------------
function printName(helloName) {
  var helloName = "Hello John";
  function inner() {
    console.log(helloName);
  }
  return inner();
}
setTimeout(printName, 1000); */
