const user = {
  id: 1,
  name: "John",
  age: 25,
};
function store(obj) {
  localStorage.setItem("user", JSON.stringify(obj));
}

store(user);

//oppure
// const store = (user) => localStorage.setItem("user", JSON.stringify(user));
// store(user);
