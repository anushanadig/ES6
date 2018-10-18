const person = {
  name: "anuhsa",
  getName() {
    console.log(this.name);
    (function() {
      console.log(this.name);
    })();
    (() => {
      console.log(this.name);
    })();
  }
};

person.getName();

//default binding
var bar = "bar";
function foo() {
  console.log(this.bar);
}
foo();

//implicit binding
var obj1 = {
  bar: "bar1",
  foo
};

obj1.foo();

//explicit binding
foo.call(obj1);

//loosing explicit binding
foo1 = foo;
foo1();

//hard binding
foo2 = function() {
  foo.call(obj1);
};

foo2();

function foo3(baz, bam) {
  console.log(this.bar, baz, bam);
}

//hard bound function
foo3 = foo3.bind(obj1, "baz");
foo3("bam");

//Four things that happen when you put a new keyword in front of a function
//1. It creates a brand new empty object
//2. Newly created object gets linked to another object
//3. Newly created object in step 1 gets passed in as this context to function call
//4. If that function doesn't already return it's own object, the new keyword assumes that you meant to return that object that was
//   passed in , so it returns this

var some = new foo();
console.log(some.bar);
console.log(foo.bar);

//determination
//1. Is the function called by new?
//2. Is the function called by call() or apply()
//3. Is the funcction called on a context object
//4. Default - global object(except strict mode)
