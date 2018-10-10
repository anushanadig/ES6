
const getFirstName = name => name.split(" ")[0];

console.log(getFirstName("anusha nadig"));

//arguments object - not bound to arrow fnctions

// function add(a,b){
//     console.log(arguments[0]);
//     return a+b;
// };

const add = (a,b)=>{
    //console.log(arguments);
    return a+b;
}

console.log(add(2,3));

//this - not bound to arrow functions

// const person = {
//     name : "anusha",
//     age : 23,
//     printDetails : function(){
//         console.log(this.name);
//     }
// }

const person = {
    name : "anusha",
    age : 23,
   // printDetails : ()=>console.log(this.name)
   printDetails(){ //es6 syntax
       console.log(this.name);

       //(function (){console.log(this.name)}); - doesn't work 
        (()=>{console.log(this.name)})();//"this" is bound to parent ,so works!
       
   }
}

const person2 = {
    name : "anusha",
    age : 23,
    cities : ["cta","blr","ckm"],
    printCities(){ //es6 syntax
       return this.cities.map((city)=>console.log(city))
       
   }
}
console.log(person2);
person2.printCities();
person.printDetails();


const multiplier = {
    numbers: [1,2,3],
    multiplyBy:3,
    multiply (){
        return this.numbers.map(number=>console.log(number*this.multiplyBy));
    }
}

multiplier.multiply();
