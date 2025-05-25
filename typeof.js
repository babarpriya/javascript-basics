function Property(obj) {
  for (let key in obj) {
    console.log(`${key}: ${typeof obj[key]}`);
    if(typeof obj[key]== "number" )
    {
        console.log("it is a number");
    }
  }
}
const person = {
  name: "priya",
  age: 25,
  isStudent: false,
  city: "mumbai"
};

Property(person);
