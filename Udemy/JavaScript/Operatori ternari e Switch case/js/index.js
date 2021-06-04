let a = 6;
let b = 2;
// Op. ternari ↓
a > 5 ? b++ : b--;
// : == else
console.log(b);

console.log("");

a = 6;
b = 2;

if (a > 5) {
  b++;
} else {
  b--;
}
console.log(b);

console.log("");

let color = "green";
switch (color) {
  case "red":
      if (color == "red") {
        document.body.style.background = "red";
        document.getElementById("demo").style.color = "#fff";
      }
    break;
  case "yellow":
      if (color == "yellow") {
        document.body.style.background = "yellow";
        document.getElementById("demo").style.display = "none";
      }
    break;
  case "green":
      if (color == "green") {
        document.body.style.background = "green";
        document.getElementById("block").style.display = "block";
      }
    break;
  default:
    console.log("There is no color");
}
console.log("");

let a = 0;
let color;

a == 0 ? color = "green" : color = "red";

switch (color) {
  case "green":
    document.body.style.background = color;
  break;
  case "red":
    document.body.style.background = color;
  break;
  default:
}
console.log(color);
console.log("");
