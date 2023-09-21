// Why are functions useful?
// - Flexible / Reusable
// - Less typing, less errors
// - Simplifies code reading

const doTheBwaaaahh = function () {
  console.log("📣: BWAAAAAAAAAAAH");
};

doTheBwaaaahh();

// For a function to be truly reusable, we will need to parameters

const yellSomething = function (something) {
  console.log(`📣: ${something.toUpperCase()}`);
};

yellSomething("BWAAAAAHHH");
yellSomething("wazzzaaaa");

// Limit the size of functions

const list = ["Alfonso", "Amanda", "Alanna", "Todd", "Bevan"];

const greetStudent = function (studentName) {
  console.log(`Good morning ${studentName}`);
};

const sayByeStudent = function (studentName) {
  console.log(`Have a nice day, ${studentName}`);
};

const greetAllStudents = function (listOfStudents) {
  for (const student of listOfStudents) {
    greetStudent(student);
  }
};

const sayByeToAllStudents = function (listOfStudents) {
  for (const student of listOfStudents) {
    sayByeStudent(student);
  }
};

// greetAllStudents(list);
// sayByeToAllStudents(list);

const saySomethingToAllStudents = function (listOfStudents, isGreeting) {
  for (const student of listOfStudents) {
    if (isGreeting) {
      greetStudent(student);
    } else {
      sayByeStudent(student);
    }
  }
};

// saySomethingToAllStudents(list, true);
// saySomethingToAllStudents(list, false);

const goOverAllTheStudents = function (list, action) {
  for (const name of list) {
    action(name);
  }
};

goOverAllTheStudents(list, greetStudent);
goOverAllTheStudents(list, sayByeStudent);
