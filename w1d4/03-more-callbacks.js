const list = ["Alfonso", "Amanda", "Alanna", "Todd", "Bevan"];

const greetStudent = function (studentName) {
  console.log(`Good morning ${studentName}`);
};

const sayByeStudent = function (studentName) {
  console.log(`Have a nice day, ${studentName}`);
};

const showName = function (name) {
  console.log(name);
};
const showNameWithEmoji = function (emoji, name) {
  console.log(`${emoji}: ${name}`);
};

const showNameWithPotatoEmoji = function (name) {
  showNameWithEmoji("🥔", name);
};

// Higher Order Function (HOF)
// A function that will take in a function as a parameter
const goOverAllTheStudents = function (list, action) {
  for (const name of list) {
    // Action is a function that we can call, but we don't know yet what it will be
    action(name);
  }
};

// greetStudent is THE callback function of goOverAllTheStudents
goOverAllTheStudents(list, greetStudent);

// sayByeStudent is THE callback function of goOverAllTheStudents
goOverAllTheStudents(list, sayByeStudent);
// Callbacks are a relationship status

goOverAllTheStudents(list, console.log);
// goOverAllTheStudents(list, showNameWithEmoji("🥔", name));
goOverAllTheStudents(list, showNameWithPotatoEmoji);

goOverAllTheStudents(list, function (name) {
  showNameWithEmoji("🥔", name);
});

// Arrow function!

const showNameWithPotatoEmojiArrow = (name) => showNameWithEmoji("🥔", name);

goOverAllTheStudents(list, (name) => showNameWithEmoji("🥔", name));
goOverAllTheStudents(list, (name) => showNameWithEmoji("🍟", name));
// Anonymous function
// The function with no name
// For a few callbacks more

// goOverAllTheStudents(list, "Hello");

// const addTwoNumbers = function (a, b) {
//   return a + b;
// };

// // const result = addTwoNumbers("Hello!", 5); BAD!
// const result = addTwoNumbers(5, 5);
// console.log(result);

const goOverAllTheItemsOfAListAndDoSomething = (list, doSomething) => {
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const index = i;

    doSomething(item, index, list);
  }
};

const someNumbers = [1, 3, 5, 7, 11, 13, 17];

const newArray = [];
goOverAllTheItemsOfAListAndDoSomething(someNumbers, (number) =>
  newArray.push(number + 1)
);

console.log(newArray);
goOverAllTheItemsOfAListAndDoSomething(someNumbers, (number, index) =>
  console.log(number, index)
);

someNumbers.forEach((number) => console.log(number));

const createANewArrayFromAnotherOneAndDoAnActionOnIt = (list, doSomething) => {
  const newArray = [];
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const index = i;

    const result = doSomething(item, index, list);
    newArray.push(result);
  }
  return newArray;
};

const result = createANewArrayFromAnotherOneAndDoAnActionOnIt(
  someNumbers,
  (number) => number * number
);

const result1 = someNumbers.map((number) => number * number);
console.log(result1);

const moreNumbers = [1, 42, 1337, 9001];

const createANewArrayFromTheOriginalButRemoveSomeItems = (list, doSomething) => {
  const newArray = [];
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const index = i;

    if (doSomething(item, index, list)) {
      newArray.push(item);
    }
  }
  return newArray;
};

const result2 = createANewArrayFromTheOriginalButRemoveSomeItems(
  moreNumbers,
  (number) => number % 2 === 1
);

console.log(result2);

const result3 = moreNumbers.filter((number) => number % 2 === 0);

console.log(result3);
