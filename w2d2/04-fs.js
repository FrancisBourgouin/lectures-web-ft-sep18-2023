const fs = require("fs");

// setTimeout(() => {
//   console.log("Hello!");
// }, 50);

// setTimeout(() => {
//   console.log("Bye!");
// }, 0);

const whenYoureDone = (err, data) => {
  if (err) {
    return console.log("Oh no. :(");
  }

  console.log("Reading file is complete");
  console.log(data);
};

fs.readFile("./02-flow.md", "utf8", whenYoureDone);

// Asynchronous content => NEED callbacks (or promises)

console.log("Loading the chicken & parrot armies");
fs.readFile("./lone-chicken.md", "utf-8", (err, chickenData) => {
  // I know that the chickens exist here
  // console.log(chickenData)
  fs.readFile("./parrot-army.md", "utf-8", (err, parrotData) => {
    // I know that the parrots exist here
    console.log("🐔 vs 🦜");
    console.log(chickenData);
    console.log(parrotData);
    console.log("End of simulation");
  });
});

// Another weird about async
// You never know the order

fs.writeFile("./someFile.txt", "Wazzaaaaaa", (err) => {
  if (err) {
    console.log("oh no");
  } else {
    console.log("file written succesfully");
  }
});
