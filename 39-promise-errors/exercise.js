const isLogged = true; //assignment variable

function login(userData) {
  return new Promise((resolve, reject) => {
    if (userData) {
      resolve(Math.random());
    } else {
      reject(new Error("Oops, something went wrong"));
    }
  });
}

function userLogin(idNumber) {
  return new Promise((resolve, reject) => {
    if (idNumber > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error("Oops, invalid ID"));
    }
  });
}

login(isLogged)
  .then(userLogin)
  .then((message) => console.log(message))
  .catch((err) => console.error(err))
  .finally(() => console.log("Session executed"));

//alternative solution provided by Develhope platform
