// Definitions vs. Expressions

// Function definition / declaration
// Hoisting => Putting a flag / sail up
// sayHello();

function sayHello() {
  console.log("Hello!");
}

// Function expression
// a + b = 5
// sayHelloAgain();

const sayHelloAgain = function () {
  console.log("Hello!");
};

// function sayHello() {
//   console.log("MWAHAHAHAHAHAHA!");
// }

// const sayHelloAgain = function () {};

// Assignement vs Reference
let name = "Little Chicken";
let otherName = name;

name = "Pequeno Pollo";

console.log(name, otherName);

const user = { name: "Potato" };
const otherUser = user;

const yetAnotherUser = { name: "Potato" };

user.name = "Papas";

console.log(user, otherUser);

// Calling a function vs. Referencing a function

const sayHi = function () {
  console.log("Hi!");
};

const greet = sayHi;

greet();
console.log(greet === sayHi);

const addTwoNumbers = function (a, b) {
  return a + b;
};

// console.log(a)
const something = addTwoNumbers;
const somethingElse = addTwoNumbers(1, 1);

console.log(something, somethingElse);

// Immediately invoked function expressions (IIFEs)

(function () {
  const greet = "Hello there";
  console.log(greet);
})();
