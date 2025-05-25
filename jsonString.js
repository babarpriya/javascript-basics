const person = {
  name: "priya",
  age: 25,
  city: "mumbai"
};
const jsonString = JSON.stringify(person);
console.log("JSON String:", jsonString);
const personObject = JSON.parse(jsonString);
console.log("Parsed Object:", personObject);
