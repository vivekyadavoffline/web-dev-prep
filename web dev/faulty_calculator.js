let random = Math.random();\
let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let op = prompt("Enter operation (+, -, *, /):");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**"
};

if (random < 0.2) {
  // 20% wrong calculation
  op = obj[op];
}

alert(`The result is ${eval(a + op + b)}`);
