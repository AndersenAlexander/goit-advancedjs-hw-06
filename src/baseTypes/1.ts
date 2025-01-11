// Convert this code to TypeScript, specifying the appropriate types for all variables.

let age = 50;
let name = "Max";
let toggle = true;
let empty = null;
let notInitialize;
let callback = (a) => {
  return 100 + a;
};

export {};

// Converted to TypeScript:

// 1.1
let age: number = 50;
let name: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined; // or let notInitialize: string | undefined;
let callback = (a: number): number => {
  return 100 + a;
};
