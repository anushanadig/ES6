//property access
var val = "pre";
const person = {
  name: "anusha",
  age: 23,
  //computed property names
  [val + "one"]: 33
};
console.log(person.name);
console.log(person["name"]);
console.log(person.preone);
