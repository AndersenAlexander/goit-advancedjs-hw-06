/*
How do you define a variable in TypeScript that can take a string or a number (union type)?
And similarly, define a variable that can only take one of two string values: 'enable' or 'disable' (literal type)?
*/

let union;
let literal;

// 1.5
// 1) Union type
let unionVar: string | number;

// 2) Literal type
let literalVar: "enable" | "disable";
