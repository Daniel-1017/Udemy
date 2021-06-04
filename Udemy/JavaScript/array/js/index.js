const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let value;

value = Array.isArray(arr);
value = arr.indexOf(9);
value = arr.slice(1, 2);
value = arr.splice(1, 0, "one", "tow");
value = arr.reverse();
value = arr.concat(1, 2);
value = arr.join(" ");
value = "hello world".split(" ");
console.log(value, arr);
