//template strings or template literal

var name = 'anusha';
var sentence = `My name is ${name}`;
console.log(sentence);

//tagged template literals
function highlight(strings,...values) {
    let str = '';
    strings.forEach((string, i) => {
        str += string + (values[i]||'');
    });
    return str;
 }
 
 var name = 'Snickers';
 const age = '100';
 var sentence = highlight`My dog's name is ${name} and he is ${age} years old`;
 console.log(sentence);


 //using .repeat for left and right padding
const fName="anusha";
const lName="nadig"
 var leftPad = function(str,length=10){
     return `${' '.repeat(length)}${str}`;
 }

 console.log(leftPad(fName));
 console.log(leftPad(lName));

 var rightPad = function(str,length=10) {
     return `${' '.repeat(length-str.length)}${str}`;
 }

 console.log(rightPad(fName));
 console.log(rightPad(lName));



 var arr = ["1","2","3"].map(parseInt);
 console.log(arr);
