/*
How can I rewrite it in TypeScript using the concept of tuples,
to ensure that the first element is always a string and the second is a number?
*/

let person = ["Max", 21];

export {};

// 1.4
let person: [string, number] = ["Max", 21];
