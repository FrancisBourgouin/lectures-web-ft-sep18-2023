let num1 = 1;
let num2 = num1;

num1 = 5;

console.log(num1, num2);

const obj1 = { a: 1, b: 2, c: [1, 2, 3] };
const obj2 = { ...obj1, c: [...obj1.c] };

obj1.a = 5;
obj1.c.push(4);

console.log(obj1, obj2);
