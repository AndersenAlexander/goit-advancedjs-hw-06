/*
How do you specify the types for the arguments and return values ​​of these functions?
*/

function showMessage(message) {
  console.log(message);
}

function calc(num1, num2) {
  return num1 + num2;
}

function customError() {
  throw new Error("Error");
}

export {};

// 1.6
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// A function that never returns (throws an error or has an infinite loop) should have return type `never`.
function customError(): never {
  throw new Error("Error");
}
