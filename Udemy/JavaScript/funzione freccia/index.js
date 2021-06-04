const plus = (x, y) => x + y;
// ==
const plusRes = plus(2, 4);
console.log(plusRes);
// ==
const withoutArgs = () => console.log("Hello World");
const singleArg = (x) => x * 2;
const moreActions = (a, b) => {
  a *= 2;
  b *= 2;
  return a + b;
};
// ==
const returnObj = (str = "") => ({
  value: str,
  length: str.length,
});
console.log("");
// ==
const obj = {
  firstName: "Danu",
  age: 15,
  getFirstName() {
    console.log(this);
  },
  getAgeArrow: null,
  getAge() {
    // this.getAgeArrow = () => console.log(this);
    setTimeout(() => console.log(this));
  },
};

obj.getAge();
console.log("");
// ==
