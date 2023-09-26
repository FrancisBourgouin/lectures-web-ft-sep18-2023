const readLine = require("readline");
const fs = require("fs");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const message = `
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See \`npm help init\` for definitive documentation on these fields
and exactly what they do.

Use \`npm install <pkg>\` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
`;

const packageInfo = {
  name: "",
  version: 12,
  cool: false,
};

console.log(message);

const updatePackageInfo = (key, value) => {
  if (key !== "cool") {
    packageInfo[key] = value;
  }
  if (key === "cool" && value === "yes") {
    packageInfo.cool = true;
  }
};

const outputAndWritePackage = () => {
  console.log("Here is your package info:");
  console.log(packageInfo);

  const packageInfoInJSONformat = JSON.stringify(packageInfo);

  // Write to file here
  fs.writeFile("./package.json", packageInfoInJSONformat, (err) => {
    if (err) {
      console.log("Sad face :(");
    } else {
      console.log("File written succesfully");
    }
  });
};

// console.log("Name of the package: ");
// rl.on("line", (line) => console.log("You wrote this: ", line));

rl.question("Name of the package: ", (answer) => {
  updatePackageInfo("name", answer);

  rl.question("What is the version of your package: ", (answer) => {
    updatePackageInfo("version", answer);

    rl.question("Is your package cool? ", (answer) => {
      updatePackageInfo("cool", answer);
      outputAndWritePackage();

      rl.close();
    });
  });
});

// JSON
// Javascript Object Notation => Text format, that follows the style of JS
