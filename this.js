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
