const person = {
    name : "anusha",
    age : 23
}

//const {name : fName="abc"} = {person:undefined};
const {age,name} = person;
console.log(name);

//swapping variables using destructuring

let a = "a";
let b = "b";

[b,a] = [a,b];
console.log(a,b);

function total({a=9,b}={}) {
    return a+b;
}
var param = {
    a : 20,
    b : 30
}
var t = total();

console.log(t);