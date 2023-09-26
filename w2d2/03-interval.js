let studentName = "Nathan";

console.log("Hello " + studentName);

const intervalId = setInterval(() => {
  console.log("Hello " + studentName);
}, 1500);

setTimeout(() => {
  studentName = "Todd";
}, 5000);

setTimeout(() => {
  // stop the interval
  clearInterval(intervalId);
}, 10000);
