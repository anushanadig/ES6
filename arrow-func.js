
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
   printDetails : function(){
       console.log(this.name);

       //(function (){console.log(this.name)}); - doesn't work 
        (()=>{console.log(this.name)})();//"this" is bound to parent ,so works!
       
   }
}


person.printDetails();

