function sayHello(firstName, lastName) {
  console.log(firstName, lastName);
  if (!firstName) return console.error("Error");
  return `Hello ${firstName} ${lastName}` + "!";
}

let res = sayHello("Danu", "Frimu");
console.log(res);
console.log("");
// == ==
let x = 10;

function foo() {
  let x = 20;
  console.log(x);
}
foo();
console.log(x);
console.log("");
// == ==
const user = {
  name: "Danu",
  age: 15,
};

function getObj(obj) {
  obj.name = "Daniel";
}
getObj(user);
console.log(user);
console.log("");
// == ==

const square = function (x) {
  return x * x;
};
console.log("");
// == ==

(function (msg) {
  console.log(msg);
})("Hello World");
console.log("");
// ==

// arguments
function foo(x) {
  console.log(x);
  console.log(arguments[1]);

  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
foo(11, "some string", [1, 2, 3]);
