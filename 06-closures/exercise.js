function printName(helloName) {
  var helloName = "Hello John";
  function inner() {
    return helloName;
  }
  return inner();
}

console.log(printName());
