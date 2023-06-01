const isLogged = true; //assignment variable

function login(isLogged) {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      resolve(Math.random());
    } else {
      reject(new Error("Error 1"));
    }
  });
}

function numberLogin(number) {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error("Error 2"));
    }
  });
}

login(isLogged)
  .then(numberLogin)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
