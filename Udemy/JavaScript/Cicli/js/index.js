// While
console.log("while");
let a = 0;
while (a <= 10) {
  console.log(a);
  a++;
}
console.log("");

// do while
console.log("do while");
let b = 0;
do {
  console.log("Hello Word");
  b++;
} while (b < 10);
console.log("");

// For
console.log("for");
for (let c = 0; c < 10; c++) {
  console.log(c);
}
console.log("");

// break & continue
console.log("break & continue");
for (let c = 0; c < 10; c++) {
  if (c === 3) {
    continue;
  } else if (c === 5) {
    break;
  }
  console.log(c);
}
console.log("");

// for + length
console.log("for + length");
let str = "Hello";
let res = "";
for (let i = 0; i < str.length; i++) {
  // console.log(str[i]);
  res += str[i] + "*";
}
console.log(res);
console.log("");

let colors = ["red", "yellow", "green", "black"];
for (let i = 0; i < colors.length; i++) {
  // console.log(colors[i]);
  colors[i] = colors[i].toUpperCase();
}
console.log(colors);
console.log("");

// for + arr + obj
console.log("for + arr + obj");
const user = [
  {
    name: "Danu",
    age: 15
  },
  {
    name: "Artur",
    age: 21
  },
  {
    name: "Radu",
    age: 44
  },
  {
    name: "Natalia",
    age: 40
  }
];
const usersObj = {};
for (let i = 0; i < user.length; i++) {
  // console.log(user[i].name);
  usersObj[user[i].name] = user[i];
}
console.log(usersObj);
console.log("");

// for in
console.log("for in");
const player = {
  name: "Danu",
  age: 15
};
for (let key in player) {
  console.log(key);
  console.log(player[key]);
}
console.log("");

// for of
console.log("for of");
for (let value of user) {
  console.log(value);
}
console.log("");
