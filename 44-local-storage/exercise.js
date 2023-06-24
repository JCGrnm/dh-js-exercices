const user = {
  id: 1,
  name: "John",
  age: 25,
};

function printUserDataLocal() {
  const storedData = localStorage.getItem("user");
  if (storedData) {
    try {
      const userData = JSON.parse(storedData);
      console.log(userData);
    } catch (error) {
      console.error("Error encountered while parsing data:", error);
    }
  } else {
    console.log("No data found in local!");
  }
}

printUserDataLocal();
