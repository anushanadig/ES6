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
