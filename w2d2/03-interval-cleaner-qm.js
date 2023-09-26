let studentName = "Nathan";

console.log("Hello " + studentName);

const intervalId = setInterval(() => {
  console.log("Hello " + studentName);
}, 1500);

setTimeout(() => {
  // stop the interval
  clearInterval(intervalId);

  const intervalId = setInterval(() => {
    studentName = "Todd";
    console.log("Hello " + studentName);
  }, 1500);

  setTimeout(() => {
    clearInterval(intervalId);
  }, 5000);
}, 5000);
