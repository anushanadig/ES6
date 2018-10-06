var x=10;
console.log(x);
if(x>5){
    let x = 20;
    console.log(x);
    }
console.log(x);

const key=2;
console.log(key);
//key=3;

const person = {
    name:"anu",
    age:22
}
console.log(person);
person.name="anusha";
console.log(person);

Object.freeze(person);
person.name="anusha nadig";
console.log(person.name);