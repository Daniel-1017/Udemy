const prod1 = {
  name: "Intel",
  price: 100,
  getName() {
    console.log(this.name);
  },
  getPrice: function () {
    console.log(this.price);
  },
  info: {
    information: ["2.3ghz"],
    getInfo: function () {
      console.log(this);
    },
  },
};
prod1.getPrice();
prod1.info.getInfo();
prod1.getName();
console.log("");
prod2 = {
  name: "AMD",
  price: 50,
};

prod2.getName = prod1.getName;
prod2.getName();

let str = "Hello World";
const reversStr = str.split("").reverse("").join("");
console.log(reversStr);
