// function foo() {
//   console.log("Hello World");
// }
//
// foo();
//
// foo.field = "Danu";
//
// console.log(foo.field);

// 1 modo => meno conveninte
// const arr = ["Danu", "Artur", "Natalia", "Radu"];
//
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i].length);
// }
// console.log(newArr);
//
// let newArr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr2.push(arr[i].toUpperCase());
// }
// console.log(newArr2);

// 2 modo
const names = ["Danu", "Artur", "Natalia", "Radu"];

function mapArr(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }
  return res;
}

function nameLength(el) {
  console.log(el);
  return el;
}

function nameToUpperCase(el) {
  return el.toUpperCase();
}

var result = mapArr(names, nameLength);
var result2 = mapArr(names, nameToUpperCase);
console.log(result2);
console.log("");

function greeting(firstName) {
  return function (lastName) {
    return `Hello, ${firstName} ${lastName}`;
  };
}

// const testGreeting = greeting("Danu");
// const fullName = testGreeting("Frimu");
const fullName = greeting("Danu")("Frimu");
console.log(fullName);
console.log("");
// == ==

function question(job) {
  // 1 modo
  const jobDictionary = {
    developer: "JavaScript",
    teacher: "Teacher",
  };
  return function (name) {
    return `${name}, ${jobDictionary[job]}`;
  };
  // 2 modo => meno conveninte
  // if (job === "developer") {
  //   return function (name) {
  //     return `${name}, JavaScript`;
  //   };
  // } else if (job === "teacher") {
  //   return function (name) {
  //     return `${name}, Teacher`;
  //   };
  // }
}

const developerQuestion = question("developer");
console.log(developerQuestion("Danu"));
const teacherQuestion = question("teacher");
console.log(teacherQuestion("Danu"));
