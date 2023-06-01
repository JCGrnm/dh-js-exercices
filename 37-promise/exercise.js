const number = 15; //assignment variable

const ourPromise = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve(number);
  } else {
    reject(new Error("Oops, this number is not greater than 10!"));
  }
});

ourPromise.then((num) => console.log(num)).catch((err) => console.error(err));
