var myArr = ["anu", "22", "CTA"];
myArr.sex = "F"; //adding property to array
myArr["3"] = "dkjdk";
console.log(myArr);
console.log(myArr.length);

//property descriptor
var myObject = {
  a: 2
};

console.log(Object.getOwnPropertyDescriptor(myObject, "a"));

Object.defineProperty(myObject, "b", {
  value: 3,
  writable: false,
  configurable: true,
  enumerable: true
});

console.log(Object.getOwnPropertyDescriptor(myObject, "b"));

myObject.a = 22;
myObject.b = 45;

//delete myObject.a;

console.log(myObject);

Object.defineProperty(myObject, "b", {
  value: 3,
  writable: true,
  configurable: true,
  enumerable: false
});

console.log(Object.getOwnPropertyDescriptor(myObject, "b"));
var val;
for (val in myObject) {
  console.log(val);
}

const obj = { a: 10 };
console.log(Object.getOwnPropertyDescriptor(obj, "a"));

var myObject2 = {
  a: 2
};
console.log(Object.getOwnPropertyDescriptor(myObject2, "a"));
//Object.preventExtensions(myObject2);
myObject2.b = "b";
console.log(Object.getOwnPropertyDescriptor(myObject2, "a"));

Object.seal(myObject2);
console.log(Object.getOwnPropertyDescriptor(myObject2, "a"));
myObject2.a = 3;
console.log(myObject2);
