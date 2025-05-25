const person = {
  name: "priya",
  age: 25,
  city: "New York",
  email: "priya@123.com"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
